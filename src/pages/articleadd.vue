<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-row :gutter="20">
                <el-col :span="12" :offset="4">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="栏目" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                            <el-option label="前端" value="1"></el-option>
                            <el-option label="生活" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="标题" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="关键字" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <el-button @click="resetForm('ruleForm')">增加关键字</el-button>
                    </el-form-item>
                    <el-form-item label="摘要" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="图片" prop="imageUrl">
                        <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove" v-model="ruleForm.imageUrl">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                      <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
              </el-form-item>
              <el-form-item label="发布时间" required  prop="date1">
                <el-form-item prop="date1">
                    <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-form-item>
                   <!--  <el-form-item label="栏目" prop="type">
                        <el-radio-group v-model="ruleForm.type">
                            <el-radio label="前端" name="type"></el-radio>
                            <el-radio label="生活" name="type"></el-radio>
                            <el-radio label="安全" name="type"></el-radio>
                            <el-radio label="其他" name="type"></el-radio>
                        </el-radio-group>
                    </el-form-item> -->


                    <el-form-item label="内容" prop="desc">

<div style="height: 410px;">
    <quill-editor v-model="ruleForm.contents" ref="myQuillEditor" style="height: 300px;" >
    </quill-editor>
</div>






                  </el-form-item>
                  <el-form-item label="置顶" prop="delivery">
                    <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</div>
</div>
</template>
<script>
    import headTop from '../components/headTop'
    import { quillEditor } from 'vue-quill-editor'
    import quillConfig from '../tools/quill-config.js'

    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    export default {
        data() {
            return {
                quillOption: quillConfig,
              dialogImageUrl: '',
              dialogVisible: false,

              ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                contents: ''
                    // imageUrl,
                },
                rules: {
                    name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        components: {
            headTop,
            quillEditor
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>
<style scoped>

    /* @import "./quill.snow.css";*/

avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.el-card__body{
    padding: 0
}

</style>
