const app = Vue.createApp({
    data() {
        return {
            internal_field_is_hovered: false,
            external_field_is_hovered: false,
            
            internal_field:'',
            internal_scrubbed: '',
            internal_field_alert: false,
            
            external_field:'',
            external_scrubbed: '',
            external_field_alert: false,

            concatenated_full_map: '',
            
            generated_field_map_array: [],
            //Final Field Map
            scrubbed_full_field_map: '',
            
            got_index: 0,
            
            copy_to_clipboard: '',
            
            key_value_items: [],
            
            internal_fields: [
                {id: '0', name: '', value: ''},
                {id: '1', name: 'First Name', value: 'first_name'},
                {id: '2', name: 'Middle Name', value: 'middle_name'},
                {id: '3', name: 'Last Name', value: 'last_name'},
                {id: '4', name: 'Primary Phone', value: 'primary_phone'}
            ]
        };
    },
    watch: {
        testWatch: function(val){
           
        },
    },
    computed: {
        testComputed() {
            
        }
    },
    methods: {
        validateInternalField(){           
            if(this.internal_field !== '' || this.internal_field > 0){
                this.internal_field_alert = false;
            }
            
            if(this.internal_field == '' || this.internal_field < 1){
                this.internal_field_alert = true;
            }
        },
        
        validateExternalField(){
            
            if(this.external_field !== '' || this.external_field > 0){
                this.external_field_alert = false;
            }
            
            if(this.external_field == '' || this.external_field < 1){
                this.external_field_alert = true;
            }
            
            
        },
        
        
        addKeyValueItem(){
            
            if(this.internal_field == '' || this.internal_field.length < 1){
                this.internal_field_alert = true;
            } else {
                this.internal_field_alert = false;
            }
            
            if(this.external_field == '' || this.external_field.length < 1){
                this.external_field_alert = true;
            } else {
                this.external_field_alert = false;
            }
            
            if(this.external_field !== '' && this.internal_field !== ''){
                this.internal_field_alert = false;
                this.external_field_alert = false;
                
                this.internal_scrubbed = '{' + this.internal_field + '}' + '=';
                //alert(this.internal_scrubbed);
                this.external_scrubbed = this.external_field + '&';
                //alert(this.external_scrubbed);

                this.concatenated_full_map = this.internal_scrubbed + this.external_scrubbed;
                //alert(this.concatenated_full_map);



                this.generated_field_map_array.push(this.concatenated_full_map);
                    //alert(this.generated_field_map_array);
                    //alert(this.scrubbed_full_field_map);
                this.scrubbed_full_field_map = this.generated_field_map_array.join('').slice(0, -1);

                //alert(this.scrubbed_full_field_map);

                var my_object = {
                    internal_field:this.internal_field,
                    external_field:this.external_field,                
                };

                this.key_value_items.push(my_object);
                    this.internal_field = '';
                    this.external_field = '';                
                }
            },           

        deleteKeyValueItem(index){
            this.got_index = index;
            
            this.key_value_items.splice(this.got_index, 1);
                        
            this.generated_field_map_array.splice(this.got_index, 1);
            
            this.scrubbed_full_field_map = this.generated_field_map_array.join('').slice(0, -1);
        },
    }

});

app.mount('#appBody');