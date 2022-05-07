<template>
  <!-- 检索区域 -->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>

    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>

  </el-form>

  <!-- 数据显示区域 -->
  <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>

    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script lang='ts'>
  // 定义表格信息
  class CustomTable{
    // 表格数据
    readonly tableData = []
    // 字段key列表
    readonly props = []
    // 字段标题列表
    readonly labels = []
    // 需要显示的字段
    fields = {
      'date': '日期',
      'name': '姓名', 
      'address': '地址'
    }

    constructor(data){
      this.props = Object.keys(this.fields)
      this.labels = Object.values(this.fields)

      var new_tableData = []
      data.forEach(row => {
        var new_row = row
        for(var key in this.props){
          if(this.props.indexOf(key) >= 0){
            new_row[key] = row[key]
          }else{
            new_row[key] = null
          }
        }
        this.tableData.push(new_row)
      });
    }
  }
  const data =  [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
  export default {
    name: 'MyTable',
    data() {
      return {
        tableData: data,
        formInline: {
          user: '',
          region: ''
        }
      }
    }
  }
</script>