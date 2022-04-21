import React from 'react'
import { Layout , Menu, Card, Input } from 'antd';
import { Content } from 'antd/lib/layout/layout';
const { Header  } = Layout;
const { Search } = Input;

const Home = () => {
    const showDrawer = () => {

    }

    const onSearch = () => {

    }

    const categories = [
        {
            label: 'Pizza',
            key: 'pizza',
            iconPath: 'pizza.png'
        },
        {
            label: 'Burger',
            key: 'burger',
            iconPath: 'burger.png'
        },
        {
            label: 'BBQ',
            key: 'bbq',
            iconPath: 'meat.png'
        },
        {
            label: 'Sushi',
            key: 'sushi',
            iconPath: 'sushi.png'
        },
        {
            label: 'Vegan',
            key: 'vegan',
            iconPath: 'broccoli.png'
        },
        {
            label: 'Desserts',
            key: 'desserts',
            iconPath: 'cake.png'
        },
        {
            label: 'BBQ',
            key: 'bbq',
            iconPath: 'sushi.png'
        },
    ]

    const restaurants = [
        {
            name: 'Royal Sushi House',
            deliveryTime: '30-40min',
            price:'$32',
            categories: ['sushi'],
            featured:true,
        },
        {
            name: 'Burgers & Pizza',
            deliveryTime: '40-60min',
            price:'$24',
            categories: ['burger','pizza'],
            featured:true,
        },
        {
            name: 'Ninja Sushi',
            deliveryTime: '20-40min',
            price:'$40',
            categories: ['sushi'],
            featured:false,
        },
        {
            name: 'Royal Sushi House',
            deliveryTime: '30-40min',
            price:'$32',
            categories: ['sushi'],
            featured:false,
        },
        {
            name: 'Burgers & Pizza',
            deliveryTime: '40-60min',
            price:'$24',
            categories: ['burger','pizza'],
            featured:false,
        },
        {
            name: 'Ninja Sushi',
            deliveryTime: '20-40min',
            price:'$40',
            categories: ['sushi'],
            featured:false,
        },

    ]


    return (
        <Layout>
           <Header className="nav-header">
            <div className="left-items">
            <a href="#"><img src="images/main.png"/></a>
            <Search className="search" placeholder="input search text" onSearch={onSearch} />
            </div>
            <Menu mode="horizontal" className="menu-class" inlineCollapsed={false} defaultOpenKeys={['restaurants','deals','myorders']} >
            <Menu.Item key="restaurants">Restaurants</Menu.Item>
            <Menu.Item key="deals">Deals</Menu.Item>
            <Menu.Item key="myorders">My Orders</Menu.Item>
            </Menu>
            <div className="cart">
            <div className="badge-count"></div>
            <img className="cart-img" src="images/card-images/shopping_bag.png" alt="shopping" />
            </div>
            <img className="avtar" src="images/img.png" alt="shopping" />
            </Header>
            <Content style={{background:"white"}}>
            <div className="main-banner">
            <Card className="home-banner-left">
                <img className="banner-img-left" src="images/img_icecream.png" alt="deals"></img>
                <div className="banner-content-left">
                   <h4>All Deserts</h4>
                   <h2>20% OFF</h2>
                    <h6>Deserty</h6>
                </div>
            </Card>
            <Card className="home-banner-right">
            <img className="banner-img-left" src="images/img_burger.png" alt="deals"></img>
                <div className="banner-content-right">
                   <h4>Big Burgers</h4>
                   <h2>50% OFF</h2>
                    <h6>Fooddiees</h6>
                </div>
            </Card>
            </div>
            <div className="categories-row">
                {categories.map((category) => {
                    return(
                        <Card className="category-card">
                            <img src={`images/emoji/${category.iconPath}`}></img>
                            <div className="category-label">{category.label}</div>
                        </Card>
                    )
                })}
            </div>
            <section className="restaurant-section">
                <div className="title">NearBy Restaurants</div>
                <div className="restaurant-list">
                {
                    restaurants.map((restraunt,index) => {
                        return(
                            <Card className="restaurant-card">
                                <div>
                                <img src={`images/card-images/img${index !== 0? index+1: 1 }.png`} />
                                <div className="featured">Featured</div>
                                </div>
                                <div className="rest-details">
                                <div className="rest-title">{restraunt.name}</div>
                                <div>
                                    <div>
                                    <img className="clock" src='/images/card-images/clock.png' />
                                    <span className="rest-subtitle">{restraunt.deliveryTime}</span>
                                    <span className="rest-subtitle">{restraunt.price} min sum</span>
                                    </div>
                                </div>
                                {
                                    restraunt.categories.map((c) => {
                                    return <div>{categories.map((category) => {
                                        if(c === category.key){
                                            return (<div className="badge">
                                            <img className="clock" src={`/images/emoji/${category.iconPath}`} />
                                            <span style={{marginLeft: '3px',color:'#83859C'}}>{category.label}</span>
                                            </div>)
                                        }
                                    })}</div>
                                    })
                                }
                                </div>
                           </Card>
                        )
                    })
                }
                </div>
            </section>
            </Content>
        </Layout>
    )
}

export default Home;
