<template>
   <form action="" class="box" style="padding:5rem;display:flex;flex-direction:column;justify-content:center;">
        <div class="field">
        <label for="" class="label">Name</label>
        <div class="control has-icons-left">
            <input v-model="name" type="username" placeholder="Projects Name" class="input">
            <span class="icon is-small is-left">
            <i class="fas fa-tasks"></i>
            </span>
        </div>
        </div>

    <b-field label="Description"
        :label-position="Description">
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

        <div class="field" style="display:flex; justify-content:space-between; margin-right:100px; margin-left:100px">
        <button class="button is-success">
            Register
        </button>
            <button type="submit" class="button is-success">
        Login
        </button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CreateJob',
    data(){
        return {
            title: '',
            email:'',
            description:'',
            dropFiles:'',
            tags:'',
            deadline:'',
            phone:''
        }
    }

}
</script>

<style>

</style>