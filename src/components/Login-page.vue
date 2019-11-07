<template>

<div>
     <form v-on:submit.prevent="signIn" action="" class="box" style="display:block">
        <div class="field">
            <label for="" class="label">Email</label>
            <div class="control has-icons-left">
            <input v-model="email" type="text" placeholder="e.g. bobsmith@gmail.com" class="input">
            <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
            </span>
            </div>
        </div>
        <div class="field">
            <label for="" class="label">Password</label>
            <div class="control has-icons-left">
            <input v-model="password" type="password" placeholder="*******" class="input">
            <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
            </span>
            </div>
        </div>
        <div class="field" style="display:flex; justify-content:space-between">
            <button type="submit" class="button is-success">
            Login
            </button>
            <button type="button" @click="register" class="button is-success">
            Register
            </button>
        </div>
    </form>
      
</div>


</template>

<script>
export default {
    props:{
        
    },
    data(){
        return {
            email : '',
            password : ''
        }
    },
    methods:{
        signIn(){
            // axios({
            //     method: 'post',
            //     url: '/user/12345',
            //     data: {
            //         username: '',
            //         password: ''
            //     }
            //     })
                // .then(({data}) => {
                //     localStorage.setItem('token', 'data')
                //     this.$emit('loginStatus', true)
                // })
                // .catch(err => {
                //     console.log(err)
                // })
                localStorage.setItem('token','lalala')
                this.$emit('loginStatus',true)
        },
        register(){
            // console.log('dari register')
            this.$emit('pageStatus','register')
        }
    }

}
</script>

<style>

.columns {
    margin-left: -40em;
    margin-right: -40rem;
    margin-top: -rem;
    
}

.box {
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #4a4a4a;
    display: block;
    padding: 4rem;
}

.input, .taginput .taginput-container.is-focusable, .textarea, .select select {
    background-color: white;
    border-color: #dbdbdb;
    border-radius: 25px;
    color: #363636;
}

.button.is-success {
    margin-top:20px;
    background-color: #db349b;
    border-color: transparent;
    color: #fff;
    border-radius: 25px;
    width: 120px;
    margin: 20px;
    height: auto
}

.label {
    color: #363636;
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
}

</style>