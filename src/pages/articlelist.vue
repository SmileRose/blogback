<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="table_container">
      <el-table :data="tableData" stripe show-summary style="width: 100%">
        <el-table-column type="selection">
        </el-table-column>
        <el-table-column fixed prop="id" label="id">
        </el-table-column>
        <el-table-column prop="title" label="标题">
        </el-table-column>
         <el-table-column prop="readnum" label="评论数">
        </el-table-column>
        <el-table-column prop="readnum" label="点击量">
        </el-table-column>
        <el-table-column prop="publicname" label="发布人">
        </el-table-column>
        <el-table-column prop="updatetime" label="更新时间">
        </el-table-column>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->



    </div>
<div class="block">

   <!--  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination> -->
  </div>
  </div>
</template>
<script>
import headTop from '../components/headTop'
import { baseUrl, baseImgPath } from '@/config/env'
import { getFoods, getFoodsCount, getMenu, updateFood, deleteFood, getResturantDetail, getMenuById } from '@/api/getData'
export default {
  data() {
    return {
      tableData: [{
        id: '113',
        title: '我想带你去浪漫的土耳其',
        readnum: '85',
        publicname: 'Rose',
        updatetime: '2019-06-28',
      }, {
        id: '113',
        title: '我想带你去浪漫的土耳其',
        readnum: '85',
        publicname: 'Rose',
        updatetime: '2019-06-28',
      }, {
        id: '113',
        title: '我想带你去浪漫的土耳其',
        readnum: '85',
        publicname: 'Rose',
        updatetime: '2019-06-28',
      }, {
        id: '113',
        title: '我想带你去浪漫的土耳其',
        readnum: '85',
        publicname: 'Rose',
        updatetime: '2019-06-28',
      }, {
        id: '113',
        title: '我想带你去浪漫的土耳其',
        readnum: '85',
        publicname: 'Rose',
        updatetime: '2019-06-28',
      }, {
        id: '113',
        title: '我想带你去浪漫的土耳其',
        readnum: '85',
        publicname: 'Rose',
        updatetime: '2019-06-28',
      }, {
        id: '113',
        title: '我想带你去浪漫的土耳其',
        readnum: '85',
        publicname: 'Rose',
        updatetime: '2019-06-28',
      }]
    }
  },
  created() {},
  computed: {},
  components: {
    headTop,
  },
  methods: {
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
}
</script>
<style lang="less" scoped>
@import '../style/mixin';
.table_container{
    margin: 20px;
    border: 1px solid #e1e1e1
}
</style>
