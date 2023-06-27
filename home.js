function showContent(content) {
    // var contactContent = "dihdiuwehfo djoiwe kjjsj";
    var infoContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";
    var guideContent = "Mr Abc";
  
    var titleElement = document.getElementById("title");
    var detailsElement = document.getElementById("details");
  
    if (content === "Contact") {
      titleElement.textContent = "Contact";
      detailsElement.innerHTML = `
      <p>
         Pune, ABC Road, 411001<br>
         Email:abc@xyz.com<br>
         Phone: 1234567890 | 9999888012<br>
      </p>
    `;
    } else if (content === "Information") {
      titleElement.textContent = "Information";
      detailsElement.textContent = infoContent;
    } 
    else if (content === 'Guide') {
        titleElement.textContent = 'Guide';
        detailsElement.innerHTML = `
            <ul>
                <li>Mr. Abc</li>
                <li>Mrs. Alison</li>
                <li>Mr. Brown</li>
                <li>Mr. Willaim</li>
                <li>Ms. Lilly</li>
                <li>Ms. Penny</li>
            </ul>
        `;
    }
    // else if (content === "Guide") {
    //   titleElement.textContent = "Guide";
    //   detailsElement.textContent = guideContent;
    // } 
    else {
      titleElement.textContent = "Welcome to the website!";
      detailsElement.innerHTML = "<p>Select an option from the left panel to see the corresponding content.</p>";
    }
  }
  