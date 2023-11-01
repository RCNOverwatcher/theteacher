import React from "react";

function More_on_Database_Management_Systems__DBMS_() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                More on Database Management Systems (DBMS)
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Introduction
                                  <br />{" "}
                                </strong>
                                A database can become very complicated very
                                quickly. With many tables, many pieces of
                                information, many queries and many people
                                wanting to access the data, it becomes necessary
                                to have a way of managing the database and
                                everything to do with it. We call the software
                                that manages a database the Database Management
                                System, or DBMS.
                              </p>

                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Access Rights, Views and the role of the DBMS.
                                </strong>
                                <br />
                                Consider a relational database in a company. It
                                is one database of related tables that serves
                                the entire business. However, you do not want
                                everyone having access to all the data in the
                                system at all times from all computers. It would
                                be a breach of the Data Protection Act for one
                                thing! You would not want your personal details
                                available to anyone who felt like looking them
                                up for another. In addition, Information in
                                companies, especially financial information, is
                                valuable and therefore needs to be restricted.
                                You want to be able to limit who can access
                                what, at what times and from where. For example:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The receptionist should be able to see who
                                      works for the company and his or her
                                      telephone extension but not personal
                                      details of each employee.
                                    </li>
                                    <li class="NormalContent">
                                      The personnel manager should be able to
                                      view, add, delete or amend an employee's
                                      details, but not be able to read the sales
                                      figures for a company.
                                    </li>
                                    <li class="NormalContent">
                                      A salesman should be able to view all
                                      orders, create new ones and view his own
                                      sales figures, but not view other people's
                                      sales figures, or the total sales figures.
                                    </li>
                                    <li class="NormalContent">
                                      The senior management should have the
                                      right to view any salesman's sales
                                      figures.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    The role of the DBMS
                                  </span>
                                </strong>
                                <br />
                                Restricting access to data is done through the
                                DBMS (See DDL in the next section). This is a
                                piece of software that, amongst other things,
                                provides an interface for the database
                                administrator to allocate 'views' and 'rights'
                                to individuals or groups of individuals. There
                                are a number of things an administrator could do
                                to a user or group of users using the DBMS.
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      A user or group could only be allowed to
                                      'view' certain records but not others.
                                    </li>
                                    <li class="NormalContent">
                                      A user or group could be allowed to both
                                      view certain records and modify them but
                                      not others.
                                    </li>
                                    <li class="NormalContent">
                                      A user could be allowed to delete certain
                                      kinds of records but not others.
                                    </li>
                                    <li class="NormalContent">
                                      A user could be allowed to execute certain
                                      programs but not others.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Setting up groups and making an individual
                                  account holder a member of groups
                                </strong>
                                <br />
                                Typically, a Database Administrator will define
                                a set of groups, each with their own rights. For
                                example, if the organisation were a school, then
                                there might be a group called Students, another
                                called Teachers, another called Finance
                                Department, another called Senior Teachers,
                                another called Special Needs Department and so
                                on. Each of these groups will be set up so that
                                they are able to access only those parts of the
                                data that they need to do their job and nothing
                                else. When an account for a new user is created,
                                they will be given a user ID and a password but
                                they will also be added to one or more of the
                                groups that have been set up. The result of this
                                is that the individual account holder inherits
                                the view of data and any rights to access, view,
                                delete, amend or add to that data that the
                                groups they are now members of have been given.
                              </p>
                              <p class="NormalContent">
                                When a user correctly logs on using the User ID
                                and Password, their rights and views are
                                accessed by the DBMS. They will only be able to
                                get to the views of data that they have been
                                allocated with and will only be able to use the
                                rights they have been given.
                              </p>
                              <p class="NormalContent">
                                <strong>Security</strong>
                                <br />
                                It is possible for individual files to have
                                extra security, for example by being
                                password-protected. The user will then have to
                                correctly enter a password to access those
                                files. This is useful to prevent casual access
                                to a computer that has been left unattended but
                                not correctly logged out. As an additional
                                security method, users can be logged out
                                automatically after a period of inactivity.
                              </p>
                              <p class="NormalContent">
                                <strong>Backing-up data</strong>
                                <br />
                                Databases and the data they hold are very
                                valuable. They take a long time to design and
                                the data in them may have been collected over
                                many years. It is important therefore to protect
                                the data. This is done by backing it up
                                regularly and keeping the back-ups safe.
                                Typically, full back-ups of the whole system and
                                data are done periodically, perhaps once a week,
                                and incremental back-ups are done at least once
                                a day and often many times a day. An incremental
                                back-up is one where the only files that are
                                backed up are the ones that have been added or
                                changed since the last back-up was done.
                              </p>
                              <p class="NormalContent">
                                The DBMS can be used to automatically schedule
                                when the back-ups are done in accordance with an
                                organisation's written back-up policy. Back-ups
                                are typically done to a magnetic tape device,
                                although backing-up off-site to cloud storage is
                                becoming increasingly more common. The only job
                                left for the Database Administrator is to check
                                periodically that the back-ups are being
                                correctly done. They should, for example,
                                restore a complete back-up on a separate
                                computer system once a month, to check that the
                                back-up system is correctly working.
                              </p>
                              <p>
                                <strong>Back-up policy</strong>
                                <br />
                                All data is at risk at all times. There are many
                                reasons why this is so. A hacker or disgruntled
                                employee may delete data, there could be a fire,
                                data might get corrupted by software or an
                                upgrade, a piece of equipment like a hard drive
                                might fail, there might be an earthquake or
                                other natural disaster, someone might steal a
                                computer with data on and so on. To ensure that
                                data can be recovered, it is backed-up
                                regularly. However, a policy is written down to
                                make it crystal clear;
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>whose job it is to do the back-ups</li>
                                    <li>
                                      how often the back-ups will be made and
                                      when it will be done
                                    </li>
                                    <li>how each back-up is to be made</li>
                                    <li>how each back-up will be labelled</li>
                                    <li>where back-ups will be stored</li>
                                    <li>
                                      how the back-up system will be tested
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Back-ups are usually done on a rolling basis.
                                For example, in the first week of a four week
                                back-up plan, an 'incremental back-up' might be
                                made every night on a back-up tape called
                                Monday1, Tuesday1, Wednesday1, and Thursday1. An
                                incremental back-up resaves only those files
                                that have changed since the last time a back-up
                                was made. On the Friday, a 'full back-up' is
                                made of the whole system' data on a tape called
                                Friday1.
                              </p>
                              <p>
                                Then the above is repeated for the next week on
                                tapes called Monday2, Tuesday2, Wednesday2,
                                Thursday2 and Friday2, so you now have 10
                                tapes). The same is done for week three and week
                                four (so you have 20 tapes now). Then at the
                                start of the new four week period, the tapes are
                                over-written and the whole process restarts.
                              </p>
                              <p>
                                The above policy might be fine for a small
                                organisation. For larger ones, you would
                                probably keep back-ups going back many months or
                                even years. The reason why so many back-ups are
                                made is that it might actually take a few weeks
                                or months to detect that there was a problem
                                with the back-up system. If you used just one
                                tape and backed up a computer every day on that
                                one tape, it would be a real problem if you
                                discovered, for example, that the back-up device
                                hadn't been working correctly for a few weeks or
                                a back-up tape was faulty.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Locking
                                </strong>
                                <br />
                                Databases occasionally need to be 'locked'. This
                                is important when multiple users potentially
                                have access to the same file at the same time.
                                For example, if a file is being updated by User
                                A, you don't want User B accessing the file
                                until User A has finished with it. Reserving a
                                file is known as 'locking' and ensures that the
                                integrity of the file contents is not
                                compromised. An example of a file needing to be
                                locked is in a real time booking system. You
                                wouldn’t want two different booking agents who
                                book cinema tickets booking the same seat at the
                                same time! This will lead to overbooking. One of
                                them must have the right to modify the file and
                                to book tickets. The other agent should have the
                                right to look at the current seat availability,
                                but not the right to book seats, until the file
                                has been updated and released as a result of any
                                bookings taken by the first booking agent.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  More on the Database Management System (DBMS)
                                </strong>
                                <br />
                                If you have used Access, or any other main
                                relational database software, then you have used
                                a DBMS. In Access, the kinds of things you will
                                have done are varied. You may have used the
                                special window to design tables, or you may have
                                designed them using SQL. You might have entered
                                data directly into the tables in ‘data sheet
                                view’. You could have spent some time designing
                                forms and entered the data in that way. You may
                                have used QBE to design a search for information
                                or again used SQL. Whichever way you used, you
                                probably presented the findings using a report.
                                All of these functions are provided by the DBMS.
                              </p>
                              <p class="NormalContent">
                                In general, a DBMS is a piece of software that
                                lets you create, manipulate and maintain a
                                database. It lets you:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Set up tables of data about data
                                      (technically called 'meta-data'. You may
                                      also know it as the 'data dictionary'.)
                                    </li>
                                    <li class="NormalContent">
                                      Create forms to enter data.
                                    </li>
                                    <li class="NormalContent">
                                      Create accounts and rights for users and
                                      groups of users.
                                    </li>
                                    <li class="NormalContent">
                                      Do queries on data.
                                    </li>
                                    <li class="NormalContent">
                                      Present data in various report formats.
                                    </li>
                                    <li class="NormalContent">
                                      Provide a programming language to let you
                                      do extra-clever things.
                                    </li>
                                    <li class="NormalContent">
                                      Provide you with the ability to set up
                                      different 'views' of data.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                Above all, the DBMS provides users with a
                                ‘conceptual view of data’. In other words, it
                                provides the user with a user interface that
                                they can understand and relate to, for example,
                                a picture of tables of data related to each
                                other (an E-R diagram) or a table of data
                                showing the name of each piece of data, their
                                data type, the validation rules and so on. Data
                                is not stored like this on disk! In fact, the
                                data might be stored in indexed files, linked
                                lists or sequential files, for example. This is
                                the ‘physical view of the data’, which humans
                                cannot understand. To make use of the data on
                                disk they need it to be interpreted and shown in
                                a form they can understand. This is what the
                                DBMS software does. It provides a user
                                interface!
                              </p>
                              <p class="NormalContent">
                                Broadly speaking, there are two main functioning
                                parts to a DBMS. These are the DDL and the DML.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Data Definition Language (DDL)
                                </strong>
                                <br />
                                The Data Definition Language (DDL) is one part
                                of the DBMS. It is used by the designer of a
                                database rather than a user. The DDL is used to
                                set up the structure of a database as well as
                                for maintaining the database. For example, using
                                the DDL, they can set up tables of data about
                                data (names of attributes, data types,
                                validation rules etc). The data about data is
                                often called ‘meta-data’. The DDL is also used
                                to set up the security systems in the database.
                                This is done using the DDL by describing the
                                whole database (the ‘schema’) and then
                                describing data in <em>parts</em> of the
                                database (the ‘sub-schema’). Once this has been
                                done, the designer can control access to each of
                                the sub-schema. For example, if a receptionist
                                needs to know each employee’s department,
                                extension and job title, then a sub-schema will
                                be defined with these data items in it. The
                                receptionist is then given access to that
                                sub-schema (she is allowed to view that data on
                                her screen) but not other sub-schema. That means
                                she cannot, for example, access how much an
                                employee earns, or the contents of their
                                personnel file. Using the DDL, then, different
                                users of a database can be allowed to access
                                certain sub-schema but not others.&nbsp; Users
                                can be given different ‘views’ of the same data
                                in a database.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Data Manipulation Language (DML)
                                </strong>
                                <br />
                                The DML is another important part of the DBMS.
                                It is commonly used by the users of a database
                                to access and update data. This language allows
                                users to actually work on the data in your
                                database. They could, for example, write
                                programs that add, delete, modify or retrieve
                                data! The DML is a very high level language.
                                This ensures that minimal programming skills are
                                necessary to actually use it. You will see and
                                get some experience of a DML when you use SQL.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  class="NormalContent"
                                  src="images/ed445a85-97d1-4656-b1a5-d514a10bbffbclip_image001.gif"
                                  alt="dbms"
                                  align="middle"
                                />
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More_on_Database_Management_Systems__DBMS_;
