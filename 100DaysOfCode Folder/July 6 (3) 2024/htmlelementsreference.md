# Elements Reference Sheet
## Commong HTML Elements

### Main Sectioning Elements
* `html` : html elements represents the root element of the HTML Document
* `head` : contains machine readable information aka (metadata) about the document ex: titles, scripts, and style sheets
* `body` : the body element represents the 'content' of an HTML document

### Document Metadata
these elements include important information about the page that helps communicate with the browsers display so that it displays the page correctly

* `link` : is an external resource link element. specifices the relationship between the current document and an external resource.
- the `link` element is most used to 'link' to stylesheets, but cis also

* `title`: defines the documents 'title' that is  shown in a browsers 'title bar' or a pages 'tab'

### Content Sections
helps you structure and visually organizee the content within the body of the document

* `footer` : represents a footer for its nearerst sectionoing conttent or sectioning root element.
- footer: contains info aboout the author of the section, copyright data or links to related documents
* `header` : represents introductory content. typically a group of introductorry or navigational aids.
- can contain some 'heading' elements,logos, a search form, authors name, and other elements
* `h1` - `h6` : six levels of section 'headings'
- level of important being highest to lowest
* `main` : represents the dominant content of the `body` of a document
- has conttent that is directyl rrelated to or expands upon thee ceentrrala topic of a document or a central functionality of an application
* `nav` : a section of a page whose purpose is to provide navigation links
- within the currrent document or to otherr documents
- ex: menus, tables of contents and indexes
* `section` : represents a standalone section
- does not have a more specific semantic element to represent it
- it's contained within a HTML Doc

### Text Content
allow you to  apply specific formatting to the text on your page
* `div` : cotainer for your flow content , helps layout styling using CSS
* `li` : used for an item in a list
* `ol` : is ana ordered list of items ( numberrs list)
* `p` : a paragraph
* `ul` : an unordered list of items( bullet list)

### Inline text semantics
used to identify the style or the structure of the enclosed content
* `a` : is an 'anchor' with a `href` attribute creatttes a `hyperlink` to web pages, files, email addresses, locations in the same page or anything else a URL can address
* `br` : produces a line break in text(carriage return)
- useful for wrtiting a poem or an address, where tthe division of lines is significant
* `em` : marks text that has 'stress' emphasis
- can be nested, which each level indicating greater degree of emphasis
* `span` : generic inline container for phrasing content
- used to group elemeents for styling( using `class` or `id` attributes) or if they share attribute values such as `lang`
`
* `strong` indicates content has a strong importance, seriousness or urgency.
- rendered 'bold'
### Image and Multimedia
* `img` : embeds an image into a document
