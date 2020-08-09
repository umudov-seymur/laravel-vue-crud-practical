import Alert from "../components/Alert";
import Category from "../components/Category";
import isEmptyObject from "../helpers";

var Mixin = {
    data() {
        return {
            errors: {},
            post: {
                title: "",
                text: "",
                category_id: ""
            }
        };
    },
    computed: {
        validationErrors() {
            let errors = [];
            Object.keys(this.errors).forEach(key => {
                errors.push(this.errors[key][0]);
            });
            return errors;
        },
        disabled() {
            return isEmptyObject(this.post);
        }
    },
    methods: {
        selectFile(event) {
            this.post.photo = event.target.files[0];
        }
    },
    components: {
        Alert,
        Category
    }
};

export default Mixin;
