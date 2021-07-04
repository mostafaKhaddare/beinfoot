<template lang="">
    <div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-header">Content</h2>
                            <ul class="list-group list-group-flush">
                                <router-link :to="{name : 'matches'}" class="list-group-item">Matches</router-link>
                                <router-link :to="{name : 'news'}" class="list-group-item">News</router-link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>