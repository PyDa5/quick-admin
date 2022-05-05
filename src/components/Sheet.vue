<!--
 * @Descripttion: elment表格模板
-->
<template>
  <div> 
    <!-- card卡片增加视觉感 -->
    <el-card class="box-card">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 20px;" @change="changeTabs">
        <el-radio-button label="top">全部（200）</el-radio-button>
        <el-radio-button label="right">待处理（100）</el-radio-button>
        <el-radio-button label="left">已处理（100）</el-radio-button>
      </el-radio-group>
      <!-- tabs切换 -->

      <!-- 搜索 -->
      <el-form :model="queryParams" ref="queryParams" :inline="true">
        <el-form-item label="商户名称:"  prop="shopName">
          <el-input
            v-model="queryParams.shopId" 
            placeholder="请输入商户名称"
            clearable
            size="small"
            style="width: 160px"
          />
        </el-form-item>
        <el-form-item label="推广平台:" prop="status">
          <el-select
            v-model="queryParams.status"
            placeholder="推广平台"
            size="small"
            style="width: 160px"
            @change="changeSelect"
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间">
            <el-date-picker 
                v-model="dateArray" 
                type="datetimerange" 
                range-separator="至" 
                value-format="yyyy-MM-dd HH:mm:ss" 
                start-placeholder="开始日期" 
                end-placeholder="结束日期" 
                :default-time="['00:00:00', '23:59:59']"
                @change="changeDate" style="width:360px;">
              </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search"  size="small" @click="submitForm('queryParams')">搜索</el-button>
          <el-button icon="el-icon-refresh" size="small" @click="resetForm('queryParams')">重置</el-button>
          <!-- <el-button icon="el-icon-circle-plus-outline" size="small" type="primary" plain  @click="openMealHandle" >新增</el-button> -->
        </el-form-item>
      </el-form>

         <!-- 表格 -->
        <el-table  :data="dataList"  border style="width: 100%" size="small" max-height="680px" @row-click="goDetails">
          <el-table-column  label="商户ID" align="center"> </el-table-column>
          <el-table-column  label="商户名称" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                酱可爱符合实际的哈师大三个等级很高事件发生的就发给
              </template>
          </el-table-column>
          <el-table-column  label="手机号码" align="center">
              <template slot-scope="scope">
                16800008888
              </template>
          </el-table-column>
          <el-table-column  label="业务人员" align="center"></el-table-column>
          <el-table-column  label="投诉原因" align="center"></el-table-column>
          <el-table-column  label="补充描述" align="center"></el-table-column>
          <el-table-column  label="图片" align="center" width="180">
              <template slot-scope="scope">
               <div class="img-box">
                 <div v-for="(item,index) in imgList" :key="index">
                   <img class="item-img" :src="item"  @click.stop="previewImage(item)">
                 </div>
               </div>
              </template>
          </el-table-column>
          <el-table-column  label="投诉时间" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                 2021-11-04 11:20:20
              </template>
          </el-table-column>
          <el-table-column  label="状态" align="center">
              <template slot-scope="scope">
                  <div>已处理</div>
                  <div>未处理</div>
              </template>
          </el-table-column>
          <el-table-column  label="操作" align="center" fixed="right" width="100">
            <template slot-scope="scope">
              <!-- @click.stop 阻止冒泡事件 -->
              <el-button  type="text"  size="small" @click.stop="confirm">处理</el-button>
              <el-button  type="text"  size="small" @click.stop="openHandle">查看处理信息</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="pagination" style="margin-top:20px;text-align:center;">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              layout="total,prev, sizes, pager, next,jumper"
              :current-page.sync="pagesQuery.pageNum"
              :page-size="pagesQuery.pageSize"
              :page-sizes="[10,30,50,100]"
              :total="pagesQuery.total">
            </el-pagination>
        </div>

    
    </el-card>

       <!-- 图片预览弹窗 -->
    <el-dialog :visible.sync="preViewVisible" width="500px">
        <img width="100%" :src="preViewImageUrl" alt="">
    </el-dialog>
     
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      tabPosition:"top",
      dateArray: [], //选择时间
       // 查询参数
      queryParams: {
        shopName: '',
        status: 0,
        startTime:'',
        endTime:''
      },
      // 分页参数
      pagesQuery:{
        pageNum: 1,
        pageSize: 10,
        total:16
      },
      statusOptions: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: 1,
          label: "来源1"
        },
        {
          value: 2,
          label: "来源2"
        },
      ],
      dataList:[1,2,3,4,5,6,1,1,1,1,1,1,1,1,1,1,1,1],
        //图片预览
      preViewVisible: false,
      preViewImageUrl: "",
      imgList:[
        "https://z3.ax1x.com/2021/08/12/fw4uHP.jpg",
        "https://z3.ax1x.com/2021/08/12/fw4uHP.jpg",
        "https://z3.ax1x.com/2021/08/12/fw4uHP.jpg",
        "https://z3.ax1x.com/2021/08/12/fw4uHP.jpg",
        "https://z3.ax1x.com/2021/08/12/fw4uHP.jpg"
      ]
    }
  },
  methods: {
    // tabs切换
    changeTabs(e){
      console.log('tabs切换',e)
    },

    //选择日期
    changeDate(e) {
      console.log("changeDate 时间选择 ->", e);
      if (e) {
        this.queryParams.startTime = e[0];
        this.queryParams.endTime = e[1];
      } else {
        this.queryParams.startTime = "";
        this.queryParams.endTime = "";
      }
    },

     /** 搜索按钮操作 */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("搜索 submit!");
          console.log('搜索 queryParams -> ', this.queryParams)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

     /**重置表单
     * 1、this.$refs 这个是必须dom渲染完成后。且表单需要有ref，formName的名字记得一致
     * 2、需要完整 el-form及 form-item 组件中 且 配置 prop，不配置的执行此方法，该输入框值不会重置。
     */
    resetForm(formName) {
      this.$nextTick(() => {
        this.$refs[formName].resetFields();
      });
      console.log("重置后数据：", this.queryParams);
    },

    // select切换选中
    changeSelect(e){
      console.log('changeSelect->',e);
    },

      /**跳转到详情页面*/
    goDetails(row) {
      console.log("获取行 row 数据->", row);
      // this.$router.push({ path: "/marketManage/worthitDetails?id=" + row });
    },

     /**分页 */
    handleSizeChange(val) {
      this.pagesQuery.pageNum = 1;
      this.pagesQuery.pageSize = val;
      console.log("单页数量", val);
    },
    handleCurrentChange(val) {
      console.log("页数", val);
      this.pagesQuery.pageNum = val;
    },

    //图片预览
    previewImage(imgurl) {
      this.preViewVisible = true;
      this.preViewImageUrl = imgurl;
    },
  },
}
</script>
<style scoped>
.box-card{
  margin: 20px;
}

/* 图片展示样式 */
.img-box{
  display: flex;
  flex-wrap: wrap;
}
.item-img{
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin:3px 5px;
}
</style>