// import { useState } from "React"
import searchStyle from "./search.module.css"
import searchIcon from "../../Logo/SearchIcon.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Search() {
  const [state, setstate] = useState({
    query: '',
    list: []
  })
    const handleChange = (e) => {
      const results = posts.filter(post => {
          if (e.target.value === "") return posts
          return post.title.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setstate({
          query: e.target.value,
          list: results
      })
  }
     const posts = [
      {  
        url: '',
        tags: ['왕관앵무', '갈라 코카투'],
        title: '코카투 앵무새',
        link: "/adopt/kokatoo"
      },
      {  
        url: '',
        tags: ['초록색 도마뱀', '예쁜 도마뱀'],
        title: '도마뱀',
        link: "/adopt/lizard"
      }
      // more data here
    ]
  { return (
    <div className={searchStyle.search}>
      <div className={searchStyle.SearchContainer}>
        <input
          type="search"
          placeholder="간편하게 분양하자!"
          value={state.query}
          onChange={handleChange}
          className={searchStyle.SearchInput}
        />
      </div>
      <div className={searchStyle.SearchResult}>
        {(state.query === '' ? "" : !state.list.length ? "결과 없음" : state.list.map(post => {
            return (
              <Link to='./adopt/kokatoo'><li key={post.title}>{post.title}</li></Link>
            )
          }))}
      </div>
    </div>
  )}
}
