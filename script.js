const app = new Vue ({

   el: '#app',

   data: {
      mailList: [],
      httpError: false,
      isLoading: true
   },

   methods: {
      mailCreation(){
         this.isLoading = true;
         this.mailList = [];

         for(let i = 0; i < 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

            .then((response)=>{
               const mail = response.data.response;
               this.mailList.push(mail);
               if(this.mailList.length === 10){
                  this.isLoading = false;
               }
            })

            .catch((error)=>{
               console.log('KO', error);
               this.httpError = true;
            })
         }
         console.log(this.mailList);
      }
   },

   // mounted(){
   //    this.mailCreation();
   // },

})