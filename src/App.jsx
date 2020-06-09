import React from "react";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

import "./css/App.css";

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <main>
        <div className="content-all">
          <header></header>

          <input type="checkbox" name="" id="check" />
          <label htmlFor="check" className="icon-menu">
            Menu
          </label>

          <h2>Toolsapp</h2>

          <nav className="menu">
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </nav>

          <article>
            <h1>Prueba de menu desplegable</h1>

            <p className="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              tempore!
            </p>

            <img width="500" height="300" />

            <p className="p2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi reprehenderit doloribus nulla quidem deleniti omnis esse
              mollitia iure, eveniet dolores et qui, autem nam quia dignissimos
              eos fuga rerum, ut dolore sint! Cum itaque eos, repudiandae facere
              quisquam eaque! Aperiam amet excepturi ducimus, similique
              voluptate dolores modi esse repellendus et nam veritatis, itaque
              fuga. Quibusdam nam consequatur autem atque, possimus non!
              Suscipit repellat laborum repellendus expedita repudiandae maiores
              et nostrum sapiente sunt voluptatibus. Sed voluptates qui
              reprehenderit saepe iste rem consequuntur beatae, fuga velit quo
              minima rerum possimus eius quas ad totam neque, vel itaque
              voluptate omnis laboriosam provident cumque repudiandae. Omnis
              praesentium, tempora ipsa nemo optio tempore, commodi nesciunt
              ipsam expedita molestiae quae nobis? Error at, laborum nulla
              accusamus commodi voluptate aut eaque amet veniam odit aspernatur
              asperiores et maxime? Eveniet eum iure at tenetur quod, aliquam
              beatae inventore hic fuga facere voluptatem magni optio blanditiis
              voluptate odio similique! Vero debitis quaerat molestias
              consequuntur provident ab quasi nisi facilis tempora corporis quas
              perferendis amet similique aperiam, in non. Accusamus rem sapiente
              dolor quae obcaecati, quasi excepturi maxime sequi, voluptatibus
              ducimus porro a et sint maiores rerum nihil quos? Totam aperiam
              labore iste nostrum omnis maxime inventore animi dicta magni
              deleniti! Quod accusamus suscipit fugiat quas natus neque dolorem
              ab asperiores, beatae ipsam nulla impedit voluptatum. Dolorum
              quibusdam, veritatis quos doloremque, cupiditate beatae similique
              reprehenderit quia deserunt impedit ullam esse. Fugiat nemo
              eveniet quisquam minima numquam. Magni incidunt aliquam veniam!
              Sint corrupti at debitis quaerat deserunt sapiente distinctio
              natus facilis aperiam. Quas ut nemo, tenetur sunt delectus, alias
              molestias impedit reiciendis itaque odio blanditiis vel! Esse
              facere vitae accusantium voluptate iste, repudiandae eos aliquam
              cum culpa! Autem est cupiditate eius accusamus consectetur minima
              nobis velit optio nisi praesentium aperiam exercitationem harum,
              vero debitis ad, mollitia veritatis cumque fugit corrupti, quasi
              impedit dolor eligendi. Id rerum ipsa ipsum voluptate delectus.
              Fugit error vero fuga soluta quidem enim deleniti ratione saepe,
              aliquid delectus in sequi iusto repellat ea expedita? Officiis
              numquam deleniti quaerat quo voluptatem neque aut sed magnam,
              itaque aspernatur voluptates libero praesentium laborum
              necessitatibus! Voluptates nulla repudiandae velit officiis error
              officia dolor cumque, facere facilis, sint quod tempora non?
              Corporis consequatur tempore, blanditiis soluta perspiciatis nihil
              numquam eveniet nostrum, recusandae, harum quasi. Rem expedita et
              repellat molestiae sapiente, iure accusamus voluptatum atque, ad
              tempora architecto in totam veritatis illum excepturi alias
              molestias temporibus iusto. Eius praesentium rem eum fugit
              cupiditate. Laborum, deleniti facere provident quae magni
              similique voluptatibus aliquam eaque at, dolore fugiat voluptatum
              alias ipsum quod, sunt quidem ab reiciendis explicabo neque
              doloremque hic nihil maxime ad! Illo hic nostrum ad velit natus.
              Quas assumenda quos, dolore neque reiciendis minima sunt nisi
              maiores, placeat aspernatur rem voluptatum quidem eum quae dolorum
              sapiente cupiditate ducimus accusamus facilis. Earum enim
              cupiditate dolore laboriosam provident iure veniam accusantium
              voluptas aliquid, numquam dolor totam rem architecto hic rerum eos
              cumque quos nulla quis suscipit autem. Fuga qui at ratione veniam
              debitis laborum consequuntur pariatur consequatur quo deleniti.
              Quod voluptatibus sequi labore corporis iste cupiditate magni
              inventore odit dignissimos hic, dolorum exercitationem quaerat
              repudiandae quisquam quam temporibus, reiciendis earum consectetur
              doloribus. Vel corrupti facere praesentium! Atque sapiente quaerat
              numquam obcaecati dolor reprehenderit ad dolore iure dicta earum,
              repellendus tempore saepe error minus fugiat aperiam provident
              nobis incidunt ipsum voluptas eaque deleniti, corporis alias. At
              aspernatur sapiente vero a voluptatibus quaerat blanditiis
              perferendis repellat earum atque assumenda cum dignissimos
              corrupti ullam quas, non beatae officiis hic voluptas rem? Earum
              officia voluptate eligendi ex at exercitationem magnam consequatur
              velit accusamus eveniet, sapiente facilis sequi aperiam quasi
              suscipit ipsum similique nihil eum. Vero unde repellat tenetur
              doloremque odit assumenda consequuntur, ullam beatae? Impedit ea
              exercitationem ex. Adipisci quidem, ut molestiae ipsa deserunt
              dolorum perspiciatis at, enim in animi est laboriosam nihil
              mollitia magnam nesciunt vero minus facere veniam doloremque
              debitis laborum? Quis ut quae tenetur reiciendis asperiores. Animi
              sapiente, hic provident officiis eveniet consectetur culpa
              laboriosam exercitationem corrupti fugit aspernatur dicta nemo
              nulla recusandae. Cum facilis sed dicta corporis fugit fuga
              laudantium, quos totam officiis ratione vel illum recusandae
              tenetur consectetur quidem quas iusto doloremque perspiciatis
              eveniet sapiente dolores? Quidem cumque aut magni natus sit modi,
              eaque itaque doloremque laudantium eius, beatae fugit quis
              quisquam vero incidunt temporibus excepturi vitae, exercitationem
              ad amet eos. Rem, quasi nam? Voluptatibus sequi soluta ipsa neque!
              Aliquid maxime dolore voluptas eos quae porro, aperiam accusamus
              et commodi quaerat possimus eligendi, voluptatibus est quas ea?
              Aliquam, natus soluta. Placeat fugit beatae similique laboriosam,
              ad impedit facilis maxime illum ipsam quibusdam sequi cupiditate
              tempore atque magnam nam quo unde accusamus explicabo ab quasi
              architecto! Magnam voluptatibus tempore praesentium hic facilis.
              Repudiandae voluptatem excepturi accusamus, quas deserunt
              dignissimos mollitia impedit voluptatum corporis assumenda
              consectetur nihil quod praesentium eveniet, consequuntur vero
              repellendus harum? Corrupti facilis tempore corporis quasi
              explicabo adipisci impedit accusantium, asperiores eum debitis
              quis? Porro corrupti facere aliquid cum maiores unde itaque!
              Repellendus maxime doloribus quia vero reiciendis quasi magni
              fugit earum, repellat minima itaque ipsum consequatur dicta eum
              esse voluptatem placeat et magnam facere necessitatibus a.
              Repellat aspernatur totam voluptatum cupiditate nulla facere culpa
              eos soluta ea dolor, est porro molestiae voluptatibus dolorem
              nesciunt quas qui inventore id officia. Deleniti molestiae nulla,
              quis reiciendis magni ex cumque inventore doloribus accusamus
              voluptatem repellat nesciunt voluptate sequi sed repellendus
              voluptas modi odit porro ipsa? Repudiandae minima nisi dolores
              voluptatum quasi, veniam nam itaque totam neque possimus, error,
              cupiditate aut nulla maiores. Sequi, et aut quos velit itaque
              aperiam accusamus voluptas suscipit quam laudantium possimus in
              magnam rem officia error dolorem deleniti pariatur quisquam neque
              hic? Nam tempore ea incidunt inventore officia numquam corporis
              quia aliquam nisi quis possimus, expedita, reprehenderit minima
              assumenda deleniti fugit. Minima, inventore quia at aliquid neque
              quam similique voluptas, distinctio sint incidunt ad commodi
              adipisci maiores! Odit illum dolores molestiae qui nam fuga
              eligendi dignissimos? Harum sunt sit libero reprehenderit saepe ex
              enim accusantium voluptates laboriosam vel debitis, ducimus
              adipisci dignissimos alias fuga repellendus fugiat praesentium
              cupiditate? Illum velit blanditiis officiis molestias, suscipit,
              illo iusto, ex quos hic ab ipsa.
            </p>
          </article>
        </div>
      </main>
    </Provider>
  );
};

export default App;
