const app = new Vue ({

   el: '#app',

   data: {
      mailList: [],
   },

   methods: {
      mailCreation(){
         for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
               console.log(response);
               const mail = response.data.response;
               this.mailList.push(mail);
               console.log(this.mailList);
            })
            .catch((error)=>{
               console.log(error);
            })
         }
      }
   },

   // mounted(){
   //    this.mailCreation();
   // },

})











// const app = new Vue ({

//    el: '#app',

//    data: {
//       books: [],
//       author: 'd/aquino',
//    },

//    methods: {
//       getNumber(){
//          axios.get('http://openlibrary.org/search.json?author='+this.author)
//          .then((response)=>{
//             console.log(response);
//             this.books = response.data.docs;
//             console.log(this.books);
//          })
//          .catch((error)=>{
//             console.log(error);
//          })
//       }
//    },

//    mounted(){
//       this.getNumber();
//    }
// })

// NUMERO RANDOM DA 1 A 9
// const app = new Vue ({

//    el: '#app',

//    data: {
//       numero: 0,
//       isError: false,
//    },

//    methods: {
//       getNumber(){
//          axios.get('https://flynn.boolean.careers/exercises/api/random/int')
//          .then((response)=>{
//             console.log(response);
//             const data = response.data;
//             console.log(data);
//             this.numero = data.response;
//          })
//          .catch((error)=>{
//             console.log(error);
//             this.isError = true;
//          })
//       }
//    },

//    mounted(){
//       this.getNumber();
//    }
// })