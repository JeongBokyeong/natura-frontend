import categoryMainStyles from './categoryMain.module.css';
// import link from route
import Search from '../components/search/search';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
function AllCategories() {
  return (
    <div className={categoryMainStyles.container}>
      <Header/>
      <h1>allCategories</h1>
      
    </div>
    );
}

export default AllCategories