# Ajsam Hora

Organisation of the website.

## Site map

**Menu section titles**

Home
Home (Ajsam Hora / Image / Philosophy)
	|__ Ajsam Hora (About / Us / Presentation)
			|__ **Ajsam Hora**
				|__ Création (anchor)
				|__ Diffusion (anchor)
				|__ Transmission (anchor)
			|__ **Qui ?** (team)	
				 |__ Qui ? (member)
			|__ **Créations** (projects)
				 |__ Créations (project)
			|__ **Projets en cours** (inprogess-projects)
				 |__ Projets en cours (project)
			|__ **Actualité** (articles)
				 |__ article (anchor)
			|__ **Contact**
				 |__ confirm sent (modal)


## Structure - Components

{component}
~~optional {component}~~
__(single or) repeted {component}__
~~__optional + repeted {component}__~~


### Qui ? 

###### team
{page-
	{navbar}
	{page-title}
	*{short-text}*
	{team-
		{member-	->	*link towards member page*
			{person-name}
			{portrait}
		-member}
	-team}
-page}

###### member
{page-
	{navbar}
	{page-title}
	{return}	->	*link towards team page*
	{name}
	{picture}
	{text}
	~~{quote}~~
	~~__{link}__~~	->  *link towards external page*
	{projects-
		__{project-__ 	->	*link towards project page*
			{project-picture}
			{project-name}
		__-project}__
	-projects}
-page}


### Créations - Projets en cours

###### projects
{page-
	{navbar}
	{page-title}
	*{short text}*
	{projects-
		__{project-__ 	->	*link towards project page*
			{project-picture}
			{project-name}
		__-project}__
	-projects}
-page}

###### project
{page-
	{navbar}
	{page-title}
	{project-name}
	{return}	*link toward projects page*
	__{picture}__
	__{text}__
	__~~{quote}~~__
	__{link}__ 		*-> link toward external page*
	__{download}__ 		*-> link to a pdf*
	__{video}__
	~~__{news}__~~ *(only for the "Projets en cours" section)*
					*-> link toward article page or external page*
	{member-list-
		__{member-__	*-> link toward member page*
			{person-name}
		__-member}__
	-member-list}
	{credits}
-page}


### Actualités

###### articles
{page-
	*{short text}*
	__{post-__
		{up}
		{post-date}
		{post-title}
		{post-body-
			{text}
			~~__{picture}__~~
			~~__{video}__~~
			~~__{learnmore}__~~		*->link toward project page or external page*
		-post-body}
	__-post}__
-page}


### Contact

{page-
	{navbar}
	{page-title}
	*{short-text}*
	{contact-form}
	{address}
-page}


