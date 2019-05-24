<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
			<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router   background-color="#324057"
      text-color="#fff"
      active-text-color="#ffd04b">
					<el-menu-item index="home"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>内容管理</template>
						<el-menu-item index="articlelist">文章列表</el-menu-item>
						<el-menu-item index="articleadd">添加文章</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-star-on"></i>模块栏目</template>
						<el-menu-item index="memuset">栏目设置</el-menu-item>
						<el-menu-item index="menuadd">添加栏目</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-plus"></i>设置</template>
						<el-menu-item index="website">站点管理</el-menu-item>
						<el-menu-item index="webcookieclear">缓存管理</el-menu-item>
						<el-menu-item index="webpwd">修改密码</el-menu-item>
					</el-submenu>
					<!-- <el-submenu index="5">
						<template slot="title"><i class="el-icon-setting"></i>站点管理</template>
						<el-menu-item index="webset">站点信息</el-menu-item>
						<el-menu-item index="seo">SEO</el-menu-item>
					</el-submenu> -->
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-warning"></i>关于</template>
						<el-menu-item index="about">关于</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
	}
</script>
