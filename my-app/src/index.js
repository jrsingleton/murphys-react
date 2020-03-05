import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, ListContent, ListItem, Divider} from 'semantic-ui-react';

//Class representing the menu at the top of the website
class TopMenu extends React.Component {
  render() {
    return (
        //Menu object with the a classname of topmenu
        <Menu borderless className="topmenu">
          <Container>
          <Menu.Item>
            <div className="logo">
              <Image
                  src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>
            </div>
          </Menu.Item>

          {/* first of the menu items on the right*/}
          <Menu.Item fitted position="right">Home</Menu.Item>
          <Dropdown item text="About Us">
            <Dropdown.Menu>
              <Dropdown.Item> Lots of info about murphys</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>Saint Patrick's Day</Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item> Menu 1</Dropdown.Item>
                <Dropdown.Item> Menu 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          <Menu.Item>Bar</Menu.Item>

          {/* farthest right menu item*/}
          <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleText extends React.Component {
  render() {
    return (
        <Container className = "mainbody">
        {/*create a vertically divided grid*/}
        <Grid divided="vertically">
          {/* With two columns*/}
          <Grid.Row columns={2}>

            {/*Left Column*/}
            <Grid.Column>
              <div className="leftlogoimage">
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png'/>
              </div>
            </Grid.Column>
            {/* Right Column */}
            <Grid.Column>
              <h3 className = "righttext">A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
    );
  }
}
class FooterMenu extends React.Component {
  render() {
    return (
        <Grid divided="vertically" className = "bfooter">
          <Grid.Row columns={3}> {/*with three columns*/}

            {/*Left most column*/}
            <Grid.Column>
              <Container className="leftlist">
              <h4>Lunch</h4>
                <Divider fitted/>
              <ListContent>
                <ListItem> Monday - Friday: 11:00am-2:30pm </ListItem>
                <ListItem> Saturday - Sunday: Not open for lunch </ListItem>
              </ListContent>
              </Container>
            </Grid.Column>

            {/* Middle Column */}
            <Grid.Column>
              <h4> Bar </h4>
              <Divider fitted/>
              <ListContent className="middlefooter">
                <ListItem> Monday - Friday: 11:00am-2:30pm </ListItem>
                <ListItem> Saturday - Sunday: Not open for lunch </ListItem>
              </ListContent>
            </Grid.Column>

            {/* Rightmost Column*/}
            <Grid.Column>
              <h4> Dinner </h4>
              <Divider fitted/>
              <ListContent className="rightfooter">
                <ListItem> Monday - Friday: 11:00am-2:30pm </ListItem>
                <ListItem> Saturday - Sunday: Not open for lunch </ListItem>
              </ListContent>
            </Grid.Column>
          </Grid.Row>
        </Grid>

    );
  }
}
// render all the pieces of the website
class Murphys extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>

          <MiddleText/>
          <FooterMenu/>
        </div>
    );
  }
}


ReactDOM.render(<Murphys/>, document.getElementById('root'));
