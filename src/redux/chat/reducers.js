import {
    CHAT_USER, ACTIVE_USER,FULL_USER, ADD_LOGGED_USER, CREATE_GROUP
} from './constants';


//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

const INIT_STATE = {
	active_user : 3,
    users: [
        //admin is sender and user in receiver
        { id : 0, name : "Patrick Hendricks", profilePicture : avatar2, status : "online", unRead : 0, roomType : "contact", isGroup: false, 
            messages: [
                { id: 1, message: "Hi, I’m feeling really overwhelmed and having thoughts I can’t handle. I need immediate help.", time: "01:05", userType: "receiver", isImageMessage: false, isFileMessage: false },
                { id: 2, message: "Hello Patrick, we’re here to help. Can you tell us more about what you’re experiencing right now?", time: "01:07", userType: "sender", isImageMessage: false, isFileMessage: false },
                { id: 3, message: "I feel like I’m at my breaking point and I don’t know how to keep going. I need someone to talk to urgently.", time: "01:08", userType: "receiver", isImageMessage: false, isFileMessage: false },
                { id: 4, message: "We’re here for you. Please try to stay with us and provide any details you can. We can connect you to immediate support.", time: "01:09", userType: "sender", isImageMessage: false, isFileMessage: false },
                { id: 5, message: "Thank you. I’m really scared and don’t know what to do next.", time: "01:10", userType: "receiver", isImageMessage: false, isFileMessage: false },
                { id: 6, message: "Patrick, we are working to get you the support you need right now. Please stay on the line.", time: "01:11", userType: "sender", isImageMessage: false, isFileMessage: false },
                { id: 7, message: "We’re connecting you to a crisis counselor who will be able to assist you further. They should reach out to you shortly.", time: "01:15", userType: "sender", isImageMessage: false, isFileMessage: false },
                { id: 8, message: "Please hold on and remember you’re not alone. We’re here to help you through this.", time: "01:16", userType: "sender", isImageMessage: false, isFileMessage: false },
                { id: 9, message: "I’m ready to help you. If you feel like you’re in danger, please let me know so we can take urgent action.", time: "01:20", userType: "sender", isImageMessage: false, isFileMessage: false }
        ] },
        { id : 1, name : "Mark Messer", profilePicture : avatar3, status : "away",unRead : "02", isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hello", time: "10.00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Images", time: "10:30 AM", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
            ]  },
        { id : 13, name : "General", profilePicture : "Null", unRead : 0, isGroup: true,
            messages: [
                { id : 33, isToday : true },
                { id : 1, userName : "John Smith",  message: "Hello send project images", time: "12:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 2, userName : "Steve Walker",  message: "Images", time: "12:05", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img6 } ] },
                { id : 3, userName : "admin",  message: "Good Afternoon everyone !", time: "2:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id : 4, userName : "Galen Rizo",  message: "This theme is Awesome!", time: "2:06 min", userType: "receiver", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 4, name : "Doris Brown", profilePicture : avatar4, status : "online",unRead : 0, isGroup: false, isTyping : true,
            messages: [
                { id : 1, userName : "Doris Brown",  message: "Good Morning", time: "10:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 2, userName : "admin",  message: "Good morning, How are you? What about our next meeting?", time: "10:02", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id : 33, isToday : true },
                { id: 3, message: "Yeah everything is fine", time: "10:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "& Next meeting tomorrow 10.00AM", time: "10:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 5, message: "Wow that's great", time: "10:06", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 6, message: "Images", time: "10:30", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img1 }, { image : img2 } ] },
                { id: 7, userName : "admin",  message: "Files", time: "01:30", userType: "sender", isImageMessage : false, isFileMessage : true, fileMessage: "Local-Reources.pdf", size : "12.5 MB" },
                { id: 8, message: "", time: "10:05 PM", userType: "receiver", isImageMessage : false, isFileMessage : false, isTyping : true },
            ]  },
        { id : 5, name : "Designer", profilePicture : "Null",unRead : "01",  isGroup: true,
            messages: [
                { id : 1, userName : "Doris Brown",  message: "Hello send project images", time: "12:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 33, isToday : true },
                { id : 2, userName : "Steve Walker",  message: "Images", time: "12:05", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img6 } ] },
                { id : 3, userName : "admin",  message: "Images", time: "01:30", userType: "sender", isImageMessage : false, isFileMessage : true, fileMessage: "Clinics.pdf" },
                { id : 4, userName : "admin", message: "@Doris Brown please review this code, and give me feedback asap", time: "01:31", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id : 5, userName : "John Howard",  message: "Good Afternoon everyone !", time: "2:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 6, userName : "admin",  message: "Good Afternoon everyone !", time: "2:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id : 9, userName : "John Howard",  message: "Next meeting tomorrow 10.00AM", time: "2:10 min", userType: "receiver", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 6, name : "Steve Walker", profilePicture : avatar6, status : "away", unRead : 0,  isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id : 1, message : "file", time : "01:16", userType : "receiver", isImageMessage : false, isFileMessage : true, fileMessage: "Local-Reources.pdf" },
                { id : 2, message : "Admin-A-zip", time : "01:16 PM", userType : "sender", isImageMessage : false, isFileMessage : false }
            ]  },

        { id : 7, name : "Albert Rodarte", profilePicture : "Null", status : "online", unRead : 0, isGroup: false, isTyping : true,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi", time: "01:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Hello, how can i help you", time: "01:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 3, message: "", time: "01:05 PM", userType: "receiver", isImageMessage : false, isFileMessage : false, isTyping : true },
            ]  },

        { id : 8, name : "Mirta George", profilePicture : "Null", status : "online", unRead : 0,  isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi...Good Morning!", time: "09:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Image", time: "10:30", userType: "sender", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
                { id: 3, message: "please, save this pictures to your file and give it to me after you have done with editing!", time: "10:31", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "Yeah, Everything is fine👍", time: "02:50 min", userType: "receiver", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 9, name : "Paul Haynes", profilePicture : avatar7, status : "away", unRead : 0, isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi...Good Morning!", time: "09:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Image", time: "10:30", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
                { id: 3, message: "please, save this pictures to your file and give it to me after you have done with editing!", time: "10:31", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "Good Morning😄", time: "02:50 min", userType: "sender", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 2, name : "Jonathan Miller", profilePicture : avatar2, status : "online",unRead : 0, isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hello Admin", time: "08:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Good morning", time: "08:00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 3, message: "Is everything is fine ?", time: "08:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "I can help you😊", time: "08:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 5, message: "Hi, How are You?", time: "08:00 PM", userType: "receiver", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 3, name : "Ossie Wilson", profilePicture : avatar3, status : "away",unRead : 0, isGroup: false, 
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi", time: "12:00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Did you finished it?", time: "12:00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "I've finished it! See you so", time: "12:05 min", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img6 } ] }
            ]  }, 

         { id : 14, name : "Sara Muller", profilePicture : "Null", status : "online",unRead : 0, isGroup: false, 
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi yana", time: "12:00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Image", time: "12:05", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img6 } ] },
                { id: 3, message: "Wow that's great", time: "12:00 AM", userType: "sender", isImageMessage : false, isFileMessage : false }
            ]  },
    ],
    groups : [
        { gourpId : 1, name : "#General", profilePicture : "Null", isGroup : true, unRead : 0, desc : "General Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 2, name : "#Reporting", profilePicture : "Null", isGroup : true, unRead : 23,  desc : "reporing Group here...",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 3, name : "#Designer", profilePicture : "Null", isGroup : true, unRead : 0, isNew : true, desc : "designers Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 4, name : "#Developers", profilePicture : "Null", isGroup : true, unRead : 0,  desc : "developers Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 5, name : "#Project-aplha", profilePicture : "Null", isGroup : true, unRead : 0, isNew : true, desc : "project related Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 6, name : "#Snacks", profilePicture : "Null", isGroup : true, unRead : 0,  desc : "snacks Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
    ],
    contacts : [
        { id : 1, name : "Albert Rodarte" },
        { id : 2, name : "Allison Etter" },
        { id : 3, name : "Craig Smiley" },
        { id : 4, name : "Daniel Clay" },
        { id : 5, name : "Doris Brown" },
        { id : 6, name : "Iris Wells" },
        { id : 7, name : "Juan Flakes" },
        { id : 8, name : "John Hall" },
        { id : 9, name : "Joy Southern" },
        { id : 10, name : "Mary Farmer" },
        { id : 11, name : "Mark Messer" },
        { id : 12, name : "Michael Hinton" },
        { id : 13, name : "Ossie Wilson" },
        { id : 14, name : "Phillis Griffin" },
        { id : 15, name : "Paul Haynes" },
        { id : 16, name : "Rocky Jackson" },
        { id : 17, name : "Sara Muller" },
        { id : 18, name : "Simon Velez" },
        { id : 19, name : "Steve Walker" },
        { id : 20, name : "Hanah Mile" },
    ]
};

const Chat = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHAT_USER:
            return { ...state };

        case ACTIVE_USER:
            return { 
            	...state,
                active_user : action.payload };
                
        case FULL_USER:
            return { 
            	...state,
                users : action.payload };

        case ADD_LOGGED_USER:
            const newUser =  action.payload
            return{
                ...state, users : [
                    ...state.users, newUser
                ]
            };

        case CREATE_GROUP :
            const newGroup =  action.payload
            return {
                ...state, groups : [
                    ...state.groups, newGroup
                ]
            }
            
    default: return { ...state };
    }
}

export default Chat;