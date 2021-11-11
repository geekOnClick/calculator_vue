const App = {
    data() {
        return {
            num: null,
            secNum: null,
            operation: null,
            result: null,
            inputValue: '',
            operationInput: '',
            btns: [7,8,9,'*',4,5,6,'/',1,2,3,'-',0,'.','=','+']
        }
    },
    methods: {
        multiplication(){
            (this.result !== null) ? this.num = this.result : this.num = this.inputValue
            this.operation = '*'
            this.operationInput = `${this.num} *`
            this.inputValue = ''
        },
        division() {
            (this.result !== null) ? this.num = this.result : this.num = this.inputValue
            this.operation = '/'
            this.operationInput = `${this.num} /`
            this.inputValue = ''
        },
        deduction(){
            (this.result !== null) ? this.num = this.result : this.num = this.inputValue
            this.operation = '-'
            this.operationInput = `${this.num} -`
            this.inputValue = ''
        },
        addition(){
            (this.result !== null) ? this.num = this.result : this.num = this.inputValue
            this.operation = '+'
            this.operationInput = `${this.num} +`
            this.inputValue = ''
        },
        makeResult(){
            this.operationInput = "";
            switch (this.operation){
                case '*':
                this.result = +this.num * +this.secNum;
                this.inputValue = this.result;
                this.num = null;
                this.secNum = null;
                 break;
                case '/':
                 if(this.secNum == 0) {
                    this.result = 'error'
                 }
                 else {
                    this.result = +this.num / +this.secNum;
                    this.inputValue = this.secNum;
                    this.num = null;
                    this.secNum = null;
                 }
                 break;
                case '-':
                 this.result = +this.num - +this.secNum;
                 this.inputValue = this.secNum;
                 this.num = null;
                 this.secNum = null;
                 break;
                case '+':
                this.result = +this.num + +this.secNum;
                this.inputValue = this.secNum;
                this.num = null;
                this.secNum = null;
                 break;
            }
        },
        add(event){
            if(event.target.textContent === '*'){
                this.checkAction();
                this.multiplication()
            }
            else if(event.target.textContent === '/'){
                this.checkAction();
                this.division();
            }
            else if(event.target.textContent === '-'){
                this.checkAction();
                this.deduction();
            }
            else if(event.target.textContent === '+'){
                this.checkAction();
                this.addition();
                
            }
            else if (event.target.textContent === '='){
                this.checkAction();
                this.inputValue = this.result;
            }
            else {
                this.inputValue += event.target.textContent
            }
        },

        checkAction(){
            if(this.num !== null) {
                this.secNum = this.inputValue;
                this.makeResult();
            }
        },
        reset() {
            this.num = null;
            this.secNum = null;
            this.operation = null;
            this.result = null;
            this.inputValue = '';
            this.operationInput = '';
        } 
    }
}

const a = Vue.createApp(App);
a.mount('#app')