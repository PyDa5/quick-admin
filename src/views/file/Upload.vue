<template>
  <el-upload
      action="uploadfile"
      ref="upload"
      :on-remove="onRemoveFile"
      :auto-upload="false"
      multiple
      :limit="2"
      :on-exceed="onFileExceed"
      :file-list="fileList">
      <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="onClickUploadBox">上传</el-button>
      <div slot="tip" class="el-upload__tip">xls/xlsx文件不能超过20M</div>
  </el-upload>
  
</template>

<script>
export default {
    name: 'uploadFile'
}
</script>

<style>

</style>