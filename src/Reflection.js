import { Link } from 'react-router-dom'
import React from 'react';
import './Home.css';
import calendar from './calendar.png'


function Reflection() {
  return (
    <div className="divBG">
      <div id="header">
        Reflection
      </div>
      <div className="textBG">

        <div className="text">
<p>Going into this project and the design process, I thought it would be a pretty linear progression.  First, we would find an issue in the group we selected and then we would create some sort of prototype that would address said issue.  However when it came time to begin researching for the design process, we instead spent as much time simply learning and absorbing information about our group.  Instead of specifically looking for areas or issues that could warrant something to be designed to improve it, we learned as much about what different people in different aspects of construction work do on a daily basis, what they like and dislike about their job, what brought them to their job, and much more.  Instead of researching and interviewing people to look for areas of possible improvement, these areas of possible improvement simply made themselves visible when the interviewees would talk about their jobs.  Even though the four people we have interviewed work on very different parts of the construction industry, a lot of them had mentioned that parts of the job that included having to relay information to the client and getting the client to understand what the project may cost and what is plausible/best.  Through this first part of the design process, we do not have a specific area we want to prototype for, but we have narrowed it down to a few key areas that we could design for.
</p>
<p>In this phase of the project, I was able to learn more about the design process and how rather than diving straight into actually finding solutions and prototypes to help, it is more beneficial to learn in depth about who we are trying to help.  Not only will learning more about the group provide vital context when designing, but it will also provide a better understanding of what to design for and what exactly is needed.  I think it was also important to acknowledge the diversity within the group we were studying.  There is a vast amount of jobs in the construction field that all require unique skills and knowledge, and each person we interviewed was able to provide a unique perspective on the field that was very valuable in their own right.  Additionally, it was interesting to take into account the background of each person we interviewed.  One of our interviewees actually owned his own technology company before going into the construction industry and actually created software that is used in construction.
</p>
<p>These insights have allowed me to have a better understanding of how design works and how creating something to help certain people is much less of a linear task than I had thought.  Even though our original intentions were to design something for utility workers, it evolved into the bigger area of the construction field.  Off of that, we learned from many different personalities and areas of expertise in the field ranging from a more hands-on and on site job to a much more management and office job.  Furthermore, many of our engagements came from places that we did not expect to find people in.  In the beginning, we used LinkedIn and cold emailed construction companies that had ties to either GDS or Tenleytown; however, we were never able to get any response from these sources.  I think the important takeaway from our journey is that it is important to keep an open mind and not be deterred by a possibly slow or discouraging start.  
</p>
<img src={calendar}></img>

        </div>
      </div>
    </div>
  );
}

export default Reflection;
