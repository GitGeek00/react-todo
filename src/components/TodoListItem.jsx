import styles from '../style/TodoListItem.module.css'
import PropTypes from 'prop-types';

function TodoListItem({ todo, onRemoveTodo, color }) {
    return (
        <>
            <li className={styles.alignLeft}>
                <h2 style={{ color: `${color}` }}>
                    <svg width="20px" height="20px" viewBox="0 0 192 150" xmlns="http://www.w3.org/2000/svg" fill={`${color}`}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round"></g><g id="SVGRepo_iconCarrier"><path stroke={`${color}`} strokeWidth="12" d="M80 105.485 48.284 73.769a4 4 0 0 0-5.657 0l-19.799 19.8a4 4 0 0 0 0 5.656L65.603 142"></path><rect width="36" height="132" x="147.279" y="37" stroke={`${color}`} strokeLinecap="round" strokeWidth="12" rx="4" transform="rotate(45 147.279 37)"></rect></g></svg>
                    &nbsp;{todo}
                    <button className={styles.button2} type="button" onClick={onRemoveTodo}>
                        <svg width="20px" height="20px" viewBox="0 0 24.00 22.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path className={styles.svg2} d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
            </li>
        </>
    );
}

TodoListItem.propTypes = {
    TodoListItem: PropTypes.string
}

export default TodoListItem;