import * as ActionTypes from './ActionTypes';
import {BaseUrl} from '../shared/baseUrl';
import axios from 'axios';

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));

     axios.get(BaseUrl+'dishes')
            .then(response=>dispatch(addDishes(response.data)))
            .catch(err=>dispatch(dishesFailed(err.message)))

}
export const dishesLoading=()=>{
   // console.log("hello World")
    return {
        type:ActionTypes.DISHES_LOADING,
    }
}
export const dishesFailed=(err)=>{
    return {
        type:ActionTypes.DISHES_FAILED,
        payload:err
    }
}
export const addDishes=(dishes)=>{
    return {
        type:ActionTypes.ADD_DISHES,
        payload:dishes,
    }
}
//comments action creator
export const addComment=(comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
})
export const postComment=(dishId,rating,author,comment)=>(dispatch)=>{
    var newComment={
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment,
    }
    newComment.date=new Date().toISOString();
    axios.post(BaseUrl+'comments',newComment)
         .then(res=>dispatch(addComment(newComment)))
         .catch(err=>alert(err.message))

}
export const postFeedback=(firstname,lastname,telnum,email,agree,contactType,message)=>{
    var d=new Date();
    var date=d.toISOString();
    var feedback={
        firstname:firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message,
        date:date
    }
    
        axios.post(BaseUrl+'feedback',feedback)
             .then(res=>alert("Feedback Submitted"))
             .catch(err=>alert(err.message))

}
export const fetchComments=()=>(dispatch)=>{
     axios.get(BaseUrl+'comments')
            .then(response=>dispatch(addComments(response.data)))
            .catch(err=>dispatch(commentsFailed(err.message)))

}
export const addComments=(comments)=>{
    return{
        type:ActionTypes.ADD_COMMENTS,
        payload:comments,
    }
}
export const commentsFailed=(err)=>{
    return{
        type:ActionTypes.COMMENTS_FAILED,
        payload:err
    }
}
//action creator for promos
export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading(true));

     axios.get(BaseUrl+'promotions')
            .then(response=>dispatch(addPromos(response.data)))
            .catch(err=>dispatch(promosFailed(err.message)))

}
export const promosLoading=()=>{
   // console.log("hello World")
    return {
        type:ActionTypes.PROMOS_LOADING,
    }
}
export const promosFailed=(err)=>{
    return {
        type:ActionTypes.PROMOS_FAILED,
        payload:err
    }
}
export const addPromos=(promos)=>{
    return {
        type:ActionTypes.ADD_PROMOS,
        payload:promos,
    }
}
//action creator for leaders
export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading(true));
    axios.get(BaseUrl+'leaders')
         .then(response=>dispatch(addLeaders(response.data)))
         .catch(err=>dispatch(leadersFailed(err.message)))
}
export const leadersLoading=()=>{
    return{
        type:ActionTypes.LEADERS_LOADING,

    }
}
export const addLeaders=(leaders)=>{
    return {
        type:ActionTypes.ADD_LEADERS,
        payload:leaders,
    }
}
export const leadersFailed=(err)=>{
    return{
        type:ActionTypes.LEADERS_FAILED,
        payload:err,
    }
}