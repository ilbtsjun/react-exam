import { useEffect, useState } from 'react'
import axios from 'axios'

const Notice = () => {
  const [notices, setNotices] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let active = true

    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        )
        if(active) 
            setNotices(response.data)
      } catch {
        if(active) 
            setErrorMessage('공지사항을 불러오지 못했습니다.')
      } finally {
        if(active)
            setLoading(false)
      }
    }

    fetchNotices()

    return () => { active = false }
  }, [])

  const filteredNotices = notices.filter((notice) =>
    notice.title.includes(searchKeyword)
  )

  return (
    <>
    <section>
      <h2>공지사항</h2>
      <input className="search"
        type="text"
        aria-label="공지사항 제목 검색"
        placeholder="제목을 검색하세요"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      {loading && <p role="status">공지사항을 불러오는 중입니다.</p>}
      {errorMessage && <p role="alert">{errorMessage}</p>}

      {!loading && !errorMessage && (
        <>
          <p aria-live="polite">{filteredNotices.length}건</p>
          <ul className="notice-list">
            {filteredNotices.map((notice) => (
              <li key={notice.id}>
                <span className="notice-id">{notice.id}</span>
                {notice.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
    </>
  )
}

export default Notice