Source: https://blog.webdevsimplified.com/2022-07/react-folder-structure/

# Advanced Folder Structure

<ul>
    <li><h2>assets</h2> 
        <p>
            The assets folder contains all images, css files, font files, etc. for your project. Pretty much anything that isn’t code related will be stored in this folder.
        </p>
    </li>
    <li><h2>components</h2>
        <p>
            Another big change you will notice with this example is that our components folder is further broken down into subfolders. These subfolders are really useful since they help keep your components organized into different sections instead of just being one massive blob of components. In our example we have a ui folder which contains all our UI components like buttons, modals, cards, etc. We also have a form folder for form specific controls like checkboxes, inputs, date pickers, etc. <br><br>
            You can customize and breakdown this components folder however you see fit based on your project needs, but ideally this folder shouldn’t get too large as many of your more complex components will be stored in the pages folder.
        </p>
    </li>
    <li><h2>context</h2>
        <p>
            The context folder stores all your React context files that are used across multiple pages. I find on larger projects you will have multiple context you use across your application and having a single folder to store them is really useful. If you are using a different global data store such as Redux you can replace this folder with a more appropriate set of folders for storing Redux files instead.
        </p>
    </li>
    <li><h2>data</h2>
        <p>
            The data folder is similar to the assets folder, but this is for storing our data assets such as JSON files that contain information used in our code (store items, theme information, etc). This folder can also store a file that contains global constant variables. This is useful when you have lots of constants you use across your application, such as environment variables.
        </p>
    </li>
    <li><h2>features</h2>
        <p>
            The massive change between these two structures is the features folder. This folder works very similarly to the pages folder from the intermediate structure, but instead of grouping by page we are instead grouping by feature. Already this is easier to understand as a developer since in 90% of cases when you are going to add new code to a project you are either going to implement a new feature, such as adding user accounts, or you are going to modify an existing feature, such as adding the ability to edit todos. This makes working with the code easier since all the code for each feature is collocated in the same place making it easy to update and add to.
        </p>
    </li>
    <li><h2>hooks</h2>
        <p>
            The final folder that is a repeat from the simple folder structure is the hooks folder. This folder is pretty much identical to the previous hooks folder, but instead of storing every hook in your application it will only store the global hooks that are used across multiple pages. This is because all page specific hooks are stored in the pages folder.
        </p>
    </li>
    <li><h2>layout</h2>
        <p>
            The first new folder is the layouts folder and this one is really simple. This is just a special folder for placing any layout based components. This would be things like a sidebar, navbar, container, etc. If you application only has a handful of layouts then this folder really isn’t needed and you can just place the layout components in the components folder, but if you have multiple different layouts used across your application this is a great place to store them.
        </p>
    </li>
    <li><h2>lib</h2>
        <p>
            The lib folder is another fairly simple folder. This folder contains facades for the various different libraries you use in your project. For example, if you use the axios library then this folder would contain a file for that axios library that creates your own API overtop of the axios API which you then use in your application. This means that instead of importing axios directly in your project you would import the file from this folder associated with axios.
        </p>
    </li>
    <li><h2>pages</h2>
        <p>
            The other major change with this new structure is the pages folder. This folder now only contains one file per page and the reason for this is that all the logic for the features on the pages are in the features folder. This means that the files in the pages folder are actually quite simple since they just glue together a few feature components and some general components.
        </p>
    </li>
    <li><h2>services</h2>
        <p>
            The final new folder is the services folder. This folder contains all your code for interfacing with any external API. Generally, on larger projects you will have many different APIs you need to access and this folder is the place to put the code that interacts with those APIs. Again this helps clean up your code since instead of littering a bunch of API interaction code in your application it is all within this one folder.
        </p>
    </li>
    <li><h2>utils</h2>
        <p>
            The final new folder is the utils folder. This folder is for storing all utility functions such as formatters. This is a pretty straightforward folder and all the files in this folder should likewise be straightforward. I generally like to only store pure functions in this folder since if a utility function has side effects then it is most likely not just a simple utility function. Obviously there are exceptions to this rule, though. Also, if you are unfamiliar with pure functions check out my complete pure functions guide.
        </p>
    </li>
</ul>