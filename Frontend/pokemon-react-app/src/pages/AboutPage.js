function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <h3>POKEMON CATCHER</h3>
      <p>
        In this application, users will be able to signup/login. Then they will
        be redirected to the home page where its a small pokedex function. The
        Catch Page will allow you to press a button called "Throw Pokeball" that
        will allow you to save the pokemon in the user database. There will be a
        nav bar to browse through the routes.
      </p>
      <h3>ACKNOWLEDGEMENTS</h3>
      <p>For this application I have used the following resources:</p>
      <ul>
        <li>Mongoose for the DB</li>
        <li>Redux for state management</li>
        <li>React Router for routing</li>
        <li>Axios for fetching data</li>
      </ul>
      <h3>PLANS</h3>
      <p>
        I plan to make the "Throw Pokeball" button to have animations to catch
        the fetched pokemon. Also need to add catch percentages.
      </p>

      <p>
        I also need to update and tweak plenty of things for the Login/SignUp
        page.
      </p>

      <p>
        i plan to add a inventory for the caught pokemon and make it look list
        of pokemon with the data for each user.
      </p>
      <h3>What I've learned</h3>
      <p>I learned to never use react + react-redux together because it can confuse the crap out of you.</p>
      <p>Also mongodb + mongoose</p>
      <h4>JUST ONE OR THE OTHER SO YOU DONT GET CONFUSED!!!</h4>
    </div>
  );
}

export default AboutPage;
