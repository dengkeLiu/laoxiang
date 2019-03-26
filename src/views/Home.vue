<template>
  <div class="body">
    <ul class="nav">
      <li @click="checkTab(0)" :class="[active==0?'active':'']">找工作</li>
      <li @click="checkTab(1)" :class="[active==1?'active':'']">招人才</li>
    </ul>
    <div class="job-list" v-if='active==0'>
      <div class="job-body" v-for="job in jobList" :key='job.id'>
        <h3>{{job.title}}<small>{{job.wages}}</small></h3>
        <div class="job-center">
          <div class="job-tag">
            <div>
              {{job.sex | sexFilter}} | {{job.experience}} | {{job.education}} | {{job.ages}}
            </div>
            <ul>
              <li v-for="advantage in job.advantages" :key='advantage'>{{advantage}}</li>
            </ul>
          </div>
          <div class="job-link"><span>投简历</span></div>
        </div>
      </div>
    </div>
    <div v-else>
      <form>
        <div>
          <label>

          </label>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data: function () {
    return {
      active: 0,
      jobList: [
        {
          id: 'j001',
          title: 'title1',
          abstract: '简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下',
          creatTime: '2019/03/25',
          publisher: '发布人',
          contacts: '联系人',
          tel: '13812345678',
          wages: '面议',
          sex: 0,
          ages: '35岁一下',
          experience: '3-5年',
          education: '学历不限',
          advantages: ['双休', '社保', '带薪休假', '团建']
        },
        {
          id: 'j002',
          title: 'title2',
          abstract: '简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下',
          creatTime: '2019/03/25',
          publisher: '发布人',
          contacts: '联系人',
          tel: '13812345678',
          wages: '面议'
        },
        {
          id: 'j003',
          title: 'title3',
          abstract: '简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下，简单介绍你下',
          creatTime: '2019/03/25',
          publisher: '发布人',
          contacts: '联系人',
          tel: '13812345678',
          wages: '面议'
        }
      ]
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    checkTab (num) {
      this.active = num
    }
  }
}
</script>
<style lang="less">
.body{
  min-height: 100vh;
  background-color: #eee;
}
.nav{
  display: flex;
  justify-content:space-around;
  font-size: 4rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  box-sizing: border-box;
  background-color: #fff;
  li{
    flex-grow: 1;
    border-bottom: 1px solid #46a3ff;
    &.active{
      border-bottom-width: 3px;
    }
  }
}
.job-list{
  padding: 1rem;
  .job-body{
    margin-bottom: 1rem;
    border-radius: 0.6rem;
    background-color: #fff;
    h3{
      height: 4rem;
      padding: 0 1rem;
      line-height: 4rem;
      font-size: 3rem;
      text-align: left;
      small{
        float: right;
      }
    }
    .job-center{
      display: flex;
      flex-flow: row nowrap;
      .job-tag{
        flex-grow: 1;
      }
      .job-link{
        flex-grow: 0;
      }
    }
  }
}
</style>
