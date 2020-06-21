import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];//massiv nomerov straniz
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesRange = 25;

    let pagesRangeCount = Math.ceil(pagesCount / pagesRange);
    let [pagesRangeNumber, setPagesRangeNumber] = useState(1);
    let minRangePageNumb = (pagesRangeNumber - 1) * pagesRange + 1;
    let maxRangePageNumb = pagesRangeNumber * pagesRange;


    return (
        <div className={s.pageDiv}>
            {(pagesRangeNumber > 1) ? <button className={s.prevButton} onClick={() => setPagesRangeNumber(pagesRangeNumber - 1)}>previous</button> : null}
            <div  className={s.pageNumbersBlock}>
                {pages.filter((p) => (p <= maxRangePageNumb && p >= minRangePageNumb)).map((p) => {

                    return <div key={p.id} className={(props.currentPage === p) ? s.selectedPage : s.plainPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</div>
                })}
            </div>

            {(pagesRangeCount > pagesRangeNumber) ? <button className={s.nextButton} onClick={() => setPagesRangeNumber(pagesRangeNumber + 1)}>next</button> : null}
            {/* onClick={setPagesNumber vipolnaet funcziu srazzy, ETO NE TO JE SAMOE CHTO I onClick = {()=>setPagesRangeNumber}} */}

        </div>



    )

}
export default Paginator;