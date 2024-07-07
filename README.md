# Mobile-App-for-Streamlining-Creative-Review-Actions

  The project is built using Ionic Framework in Angular.

  ## Live Demo

   I have hosted this project on the below link :
  
 Hosted at : [Mobile App for Streamlining Creative Review Actions](https://Amanhacker.github.io/Mobile-App-for-Streamlining-Creative-Review-Actions)

      **Note**: Please view this website in mobile mode. It is preferably tested on the Samsung Galaxy S20 Series.
    
  Please open this website in either Mobile or responsive Mobile devices (if you're using any browser in Laptop screen).
  (Preferably use Samsung Galaxy S20 Series)

  ## Running the Project Locally

    npm install
    npm install -g @ionic/cli
    ionic serve

  The project will open at http://localhost:8100/login

  This project is for Mobile devices.
 
    (Just make this repo public, then you're able to see this website live)

  Below are the Usernames & their Credentials :

    - Username : aman.barnwal
    - Username : pooja.bhatia
    - Username : rahul.malhotra
    - Username : deepak.saxena
    - Username : admin

    The password is same for all Users - Creative@123

  We have two roles:
1. **Creative Reviewer Lead**: Can see the dashboard of all other users as well.
2. **Creative Reviewer**: Can manage their tasks.

## Components
  We have 4 components -
    
  1. **Login Page**
  2. **Main Approved / Rejected / Pending Page**
  3. **View Details Page**
  4. **Profile Page**

## Project Explanation

  While watching Instagram feed, I noticed how easy it was to comment and share posts due to its intuitive UI.
    
  This inspired me to create an app dedicated to streamlining the Creative Review process, such as Approving or Rejecting Creatives, using just a mobile device.

  The current browser-based portal takes around 3 steps to actually view the content before making a final decision over the creative. 

  The goal of this app is to increase the throughput of the manual review team by simplifying the process.

  To solve this problem, I went on looking for various frameworks to develop a mobile app which can be easily ported to any platform. 

  I tried out and figured that for our problem space, ionic framework was able to solve all the feature requirements that we thought of.

  Ionic framework allows easy development and integration with other JS frameworks. 

  To fetch the current creative data, we simply used the current API exposed for Creative Review which had all the relevant info that we wanted to showcase.

### App Flow
  Lets go through the current flow of our app which we feel if used by the user can improve its throughput by 3 times as the current view makes it very clear to approve or reject a content in a single scroll.

  The app is designed to improve efficiency, making it easy to approve or reject content with a single scroll. 

  The first page is the login page, here we have two user accounts.

  1. **Login Page**: Users can log in as either a Creative Reviewer or a Creative Reviewer Lead.
  2. **Creative Reviewer**: After logging in, users can view and manage their creative reviews.
  3. **Creative Reviewer Lead**: After logging in, leads can view and manage reviews for all users.
  
    - Lets see the flow of creative review user (DIY after login).
    - Lets see the flow of creative reviewer lead (DIY after login).

   ## Conclusion

This app aims to:
- Increase efficiency by three times.
- Provide easy access for the manual review team.
- Improve ease of access for business users with a user-friendly UX.
    
  ## Deployment to GitHub Pages

To host the project on GitHub Pages, follow these steps:

1. Build the project:
    ```sh
    ng build --base-href "https://Amanhacker.github.io/Mobile-App-for-Streamlining-Creative-Review-Actions/"
    ```
2. Navigate to the `dist` directory:
    ```sh
    cd dist
    ```
3. Initialize a new Git repository:
    ```sh
    git init
    ```
4. Add the remote origin:
    ```sh
    git remote add origin https://github.com/Amanhacker/Mobile-App-for-Streamlining-Creative-Review-Actions.git
    ```

Before committing the files inside the `dist` folder, ensure that the `<base>` tag in `index.html` is correctly set:
```html
<base href="https://Amanhacker.github.io/Mobile-App-for-Streamlining-Creative-Review-Actions/">
```

5. Commit and push the code to the `gh-pages` branch:
    ```sh
    git add .
    git commit -m "Code push for GitHub Pages"
    git push -u origin master:gh-pages
    ```

6. Set up GitHub Pages:
    - Go to your GitHub repository settings.
    - Navigate to the "Pages" tab.
    - Set the source to the `gh-pages` branch.

That's it! Your Ionic project should now be deployed to GitHub Pages.
