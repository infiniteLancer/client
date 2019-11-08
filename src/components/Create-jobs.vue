<template>
   <form @submit="createNewJob" class="box" style="padding:5rem;display:flex;flex-direction:column;justify-content:center;">
        <div class="field">
        <label for="" class="label">Name</label>
        <div class="control has-icons-left">
            <input v-model="name" type="username" placeholder="Projects Name" class="input">
            <span class="icon is-small is-left">
            <i class="fas fa-tasks"></i>
            </span>
        </div>
        </div>

    <b-field label="Description">
        <b-input v-model="description" maxlength="200" type="textarea" placeholder="Describe your projects details" ></b-input>
    </b-field>

    <div class="field">
        <label for="" class="label">References</label>
        <div class="control has-icons-center">
            <section>
                <b-field>
                    <b-upload v-model="dropFiles"
                        multiple
                        drag-drop>
                        <section class="section">
                            <div class="content has-text-centered">
                                <p>
                                    <b-icon
                                        style="align-items:center"
                                        icon="upload"
                                        size="is-medium">
                                    </b-icon>
                                </p>
                                <p>Drop your files here or click to upload</p>
                            </div>
                        </section>
                    </b-upload>
                </b-field>

                <div class="tags">
                    <span v-for="(file, index) in dropFiles"
                        :key="index"
                        class="tag is-primary" >
                        {{file.name}}
                        <button class="delete is-small"
                            type="button"
                            @click="deleteDropFile(index)">
                        </button>
                    </span>
                </div>
        <template>
            <section>
                <b-field label="Requirements">
                    <b-taginput
                        v-model="tags"
                        ellipsis
                        icon="label"
                        placeholder="ex : programmer">
                    </b-taginput>
                </b-field>
            </section>
        </template>
            </section>
        </div>
        </div>

        <div class="field">
        <label for="" class="label">Deadline</label>
        <div class="control has-icons-left">
            <input v-model="deadline" type="date" placeholder="yyyy-mm-dd" class="input">
            <span class="icon is-small is-left">
            <i class="fas fa-stopwatch"></i>
            </span>
        </div>

        <div class="field">
        <label for="" class="label">Phone</label>
        <div class="control has-icons-left">
            <input v-model="phone" type="text" placeholder="+62 " class="input">
            <span class="icon is-small is-left">
            <i class="fas fa-mobile-alt"></i>
            </span>
        </div>

        </div>

        <div class="field" style="display:flex; justify-content:center; margin-right:100px;">
            <button type="submit" class="button is-success">
                Create Job
            </button>
        </div>
    </form>
</template>

<script>
import Swal from 'sweetalert2'
import axios from '../../apis/server'

export default {
    name: 'CreateJob',
    data(){
        return {
            name: '',
            description:'',
            dropFiles:[],
            tags:[],
            deadline:'',
            phone:'',
            Toast : Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500
            })
        }
    },
    methods: {
        deleteDropFile(index) {
            this.dropFiles.splice(index, 1)
        },
        createNewJob(){
            Swal.showLoading()
            
            let fd = new FormData()
            this.dropFiles.forEach(image => {
                fd.append('imgUrl', image)
            });
            this.tags.forEach(skill => {
                fd.append('skill', skill)
            })
            fd.set('name', this.name)
            fd.set('description', this.description)
            fd.set('phone', this.phone)
            fd.set('deadline', this.deadline)

            axios({
                method: 'post',
                url: '/vacancy',
                data: fd,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({data}) => {
                    this.name = ''
                    this.description = ''
                    this.skill = ''
                    this.phone = ''
                    this.dropFiles = []
                    this.tags = []
                    
                    Swal.close()
                    this.$emit('closeModal', false)
                    this.Toast.fire({
                        icon: 'success',
                        title: 'Create Job successfully'
                    })
                })
                .catch(err => {
                    Swal.close()
                    Swal.fire({
                        icon: 'error',
                        title: 'Sorry,',
                        text: err.response.data.errors.join(', ')
                    })
                })
        }
    }

}
</script>

<style>

</style>