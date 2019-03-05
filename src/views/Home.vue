<template>
  <div>
    <ul class="nav">
      <li class="active">找工作</li>
      <li>招人才</li>
    </ul>
    <div>
      <form>
        <div>
          <label></label>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="less">
.nav{
  display: flex;
  justify-content:space-around;
  font-size: 4rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  box-sizing: border-box;
  li{
    flex-grow: 1;
    border-bottom: 1px solid #46a3ff;
    &.active{
      border-bottom-width: 3px;
    }
  }
}
</style>
