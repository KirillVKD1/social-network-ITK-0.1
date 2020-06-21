import * as axios from 'axios';

const instance = axios.create({ //axios.create sam vstraivaet vse nastroiki dla zaprosa na server, kotorie vpishem!!!
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',//baseURL specialnii element axios.create- dobavlaet path pri zaprose(posle get,delete,post...)
    withCredentials: true, //authorized = true 
    headers: { 'API-KEY': '0ff06c8a-4b7a-469e-9f05-bf3d534b950e' },

})


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 20) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)//beret konkretnoe chislo polzovatelei skonkretnoi stranizi 
            .then(response => { //kogda prihodit otvet zapyskaetsa function>>
                return response.data; //vmesto togo,chtobi brat ves respond berem tolko to chto nam neobhodimo, t.e.(data) i  vozvrashaem ee
            })
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(id) {
        console.warn('obsolete method,useprofileAPI object')
        return profileAPI.getProfile(id)//ssilaetsa na profileAPI deligirovanie, 
    }

}


export const profileAPI = {

    getProfile(id) {
        return instance.get(`profile/${id}`)
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })//opredelatsa id s pomosh'u cookie,t.e beretsa tvoi id

    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo/`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }//treti parametr-nastroika spec zagolovkov-govorim o tom chto otpravlaem file
        })
    }

}



export const authAPI = {

    me() {
        return instance.get(`auth/me`)

    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}