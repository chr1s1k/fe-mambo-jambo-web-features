import { Card } from "../components"
import "./ContainerQueries.css"

export default function ContainerQueries() {
  return (
    <>
      <h1>Container queries</h1>
      <div className="grid">
        {/* <div className="main">
          <p>
            Macaroon cupcake gummi bears cake cupcake biscuit. Sesame snaps cheesecake dessert
            croissant macaroon. Croissant sugar plum bonbon carrot cake icing ice cream. Brownie
            gingerbread shortbread cookie cotton candy tootsie roll. Lemon drops gummies macaroon
            croissant candy canes sugar plum. Tootsie roll powder muffin I love I love donut.
          </p>
          <Card title="Main card" imageSrc="https://satyr.dev/360x240" className="mb-3">
            Tart fruitcake gingerbread shortbread lemon drops chocolate cake cookie marshmallow
            liquorice. Marzipan cookie sweet roll lollipop candy gummies chupa chups dessert donut.
          </Card>
        </div> */}
        <div className="cards">
          <Card title="Card 1" imageSrc="https://satyr.dev/360x240/1">
            Lollipop biscuit candy chupa chups shortbread. Candy canes cotton candy chocolate wafer
            cake. Cake fruitcake tart gummies I love gingerbread I love.
          </Card>
          <Card title="Card 2" imageSrc="https://satyr.dev/360x240/2">
            Macaroon brownie lollipop liquorice pudding I love marshmallow. Cotton candy dragée
            macaroon candy canes icing powder candy canes.
          </Card>
          <Card title="Card 3" imageSrc="https://satyr.dev/360x240/3">
            Lollipop powder fruitcake topping tiramisu sweet roll. Marshmallow bear claw icing jelly
            beans I love sweet. I love jelly beans sesame snaps cheesecake ice cream.
          </Card>
        </div>
      </div>
    </>
  )
}
