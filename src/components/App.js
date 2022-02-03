import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {

  state = { videos: [], seletectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async term => {
    const response = await Youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      seletectedVideo: response.data.items[0]
    });

  };

  onVideoSelect = (video) => {
    this.setState({ seletectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid' >
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.seletectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;