<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

      <div>
        <Card style="width: 25rem; margin-bottom: 2em">
            <template #title>
                Simple Card
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
        </Card>
      </div>
</template>


<script>

import Card from 'primevue/card';


export default {

        components : {
          Card
    },

}
</script>
