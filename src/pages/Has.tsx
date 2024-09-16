import { Card } from "../components"
import "./Has.css"

export default function Has() {
  return (
    <>
      <h1>:has()</h1>
      <section className="h-full">
        <h2>Parent selector</h2>
        <div className="figure-wrapper">
          <figure>
            <img src="https://satyr.dev/360x240" alt="" width={360} height={240} />
            <figcaption>A great looking picture.</figcaption>
          </figure>
        </div>
      </section>

      <section className="h-full">
        <h2>Previous sibling selector</h2>
        <ul className="pagination">
          <li>
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">4</a>
          </li>
          <li>
            <a href="">5</a>
          </li>
          <li>
            <a href="">6</a>
          </li>
          <li>
            <a href="">7</a>
          </li>
          <li>
            <a href="">8</a>
          </li>
          <li>
            <a href="">9</a>
          </li>
          <li>
            <a href="">10</a>
          </li>
        </ul>
      </section>

      <section className="h-full">
        <h2>Anywhere selector</h2>
        <div className="layout-switcher">
          <label htmlFor="displayGrid">
            <input type="radio" name="display" value="grid" id="displayGrid" defaultChecked />
            Display as grid
          </label>
          <label htmlFor="displayList">
            <input type="radio" name="display" value="list" id="displayList" />
            Display as list
          </label>
        </div>
        <div className="articles">
          <Card
            title="Chocolate lemon drops liquorice muffin tart carrot cake"
            imageSrc="https://satyr.dev/360x240/1"
          >
            Lollipop biscuit candy chupa chups shortbread. Candy canes cotton candy chocolate wafer
            cake. Cake fruitcake tart gummies I love gingerbread I love.
          </Card>
          <Card
            title="Cake liquorice ice cream sugar plum jelly-o cotton"
            imageSrc="https://satyr.dev/360x240/2"
          >
            Macaroon brownie lollipop liquorice pudding I love marshmallow. Cotton candy dragée
            macaroon candy canes icing powder candy canes.
          </Card>
          <Card
            title="Cheesecake muffin croissant candy canes jelly"
            imageSrc="https://satyr.dev/360x240/3"
          >
            Lollipop powder fruitcake topping tiramisu sweet roll. Marshmallow bear claw icing jelly
            beans I love sweet. I love jelly beans sesame snaps cheesecake ice cream.
          </Card>
        </div>
      </section>
    </>
  )
}
