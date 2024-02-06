import CreateDataContext from "./createDataContext";


/*state is our blogPosts*/
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost': 
            return [...state, {title: `Blog Post #${state.length+1}`}];
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogpost'})
    };
};
//CreateDataContext (reducer, actions, initial default state value)
export const {Context, Provider} = CreateDataContext(blogReducer, {addBlogPost}, [])

