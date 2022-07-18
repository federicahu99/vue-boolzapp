console.log('ok', Vue)

const root = new Vue ({
    el: "#root",
    data : {
      textMessage: '',
      currentIndex: 0,
      searchByLetters:'',
      user: {
        name: 'Nome Utente',
        avatar: '_io'
      },
      contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          text: 'Hai portato a spasso il cane?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di dargli da mangiare',
          status: 'sent'
        },
        {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
          date: '20/03/2020 16:30:00',
          text: 'Ciao come stai?',
          status: 'sent'
        },
        {
          date: '20/03/2020 16:30:55',
          text: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
        },
        {
          date: '20/03/2020 16:35:00',
          text: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'sent'
        }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
          date: '28/03/2020 10:10:40',
          text: 'La Marianna va in campagna',
          status: 'received'
        },
        {
          date: '28/03/2020 10:20:10',
          text: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
        },
        {
          date: '28/03/2020 16:15:22',
          text: 'Ah scusa!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          text: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          text: 'Si, ma preferirei andare al cinema',
          status: 'received'
        }
        ],
      },
      ]
        
    }, computed: {
      filteredContacts(){
        const searchText= this.searchByLetters.toLowerCase();
        const filteredContacts = this.contacts.map((contact)=>{
        if(contact.name.toLowerCase().includes(searchText)) {
          contact.visible = true;
        } else {
          contact.visible = false;
        } 

        // OPPURE: contact.visible = contact.name.toLowerCase().includes(searchText)
        });
      }


    }, methods: {
      openChat(index) {
        this.currentIndex = index;
      },

      send() { //invio il testo all'interno dell'input
        if(!this.textMessage) {
          return
        }
        dayjs.extend(dayjs_plugin_customParseFormat)  //date
        newMessage = { //nuovo oggetto per array 
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: this.textMessage,
        status: 'sent'
        },
        this.contacts[this.currentIndex].messages.push(newMessage),
        this.textMessage=''; //svuoto
        this.sendResponse() //timer risposta automatica
      },

      sendResponse() { // risposta automatica dopo 1 secondo
        setTimeout(() => {
        const newResponse= {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: 'ok',
        status: 'received'
        };
        this.contacts[this.currentIndex].messages.push(newResponse)
      }, 1000)
    }, 
      
    }
  })
