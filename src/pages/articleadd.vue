<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">





        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'


    export default {
        data(){
            return {
                baseUrl,
                baseImgPath,
                restaurant_id: null,
                city: {},
                offset: 0,
                limit: 20,
                count: 0,
                tableData: [],
                currentPage: 1,
                selectTable: {},
                dialogFormVisible: false,
                menuOptions: [],
                selectMenu: {},
                selectIndex: null,
                specsForm: {
		          	specs: '',
		          	packing_fee: 0,
		          	price: 20,
		        },
                specsFormrules: {
		        	specs: [
						{ required: true, message: '请输入规格', trigger: 'blur' },
					],
		        },
		        specsFormVisible: false,
                expendRow: [],
            }
        },
        created(){


        },
        computed: {

        },
    	components: {

    	},
        methods: {
        },
    }
</script>

