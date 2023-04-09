import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {
    searchInput: '',
    HistoryList: initialHistoryList,
    isShow: false,
  }

  updateSearch = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    console.log(`deleteUser triggered - ${id}`)
    const {HistoryList} = this.state

    const filteredData = HistoryList.filter(each => each.id !== id)

    // console.log(filteredData)
    this.setState({
      HistoryList: filteredData,
    })
    console.log(HistoryList.length)
    console.log(HistoryList)
    if (HistoryList.length === 1) {
      this.setState({isShow: true})
    }
  }

  render() {
    const {searchInput, HistoryList} = this.state
    // console.log(deleteHistory)
    // const {HistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="top-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="top-container-image"
              alt="app logo"
            />
          </div>
          <div className="top-container-search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="top-search-image"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search history"
              className="top-search-image search-tab"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="bottom-container">
          <ul>
            {searchResults.length === 0 ? (
              <p> There is no history to show</p>
            ) : (
              searchResults.map(eachItem => (
                <HistoryItem
                  historyDetails={eachItem}
                  key={eachItem.id}
                  updateSearch={this.updateSearch}
                  deleteHistory={this.deleteHistory}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default History
