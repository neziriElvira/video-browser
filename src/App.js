import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './services/apiService';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  getResponse = async (termFromSearchBar = 'semantic ui') => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
    console.log("this is resp", response);
  };

  handleSubmit = (termFromSearchBar) => {
    this.getResponse(termFromSearchBar);
  };

  componentDidMount = () => {
    this.getResponse();
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <Container style={{ marginTop: '1em' }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <Grid>
          <GridRow>
            <GridColumn width={11}>
              <VideoDetail video={this.state.selectedVideo} />
            </GridColumn>
            <GridColumn width={5} floated="right">
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    )
  }
}

export default App;