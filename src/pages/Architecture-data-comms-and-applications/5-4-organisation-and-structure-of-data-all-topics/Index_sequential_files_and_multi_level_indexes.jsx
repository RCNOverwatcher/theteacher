import React from "react";

function Index_sequential_files_and_multi_level_indexes() {
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
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Index sequential files and multi-level indexes
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    <br />
                                  </span>
                                </strong>
                                <strong class="NormalContentHeading">
                                  Index sequential files
                                  <br />
                                </strong>
                                If you store files on a magnetic tape, for
                                example, to back-up a hard drive then the files
                                on the tape will be either in serial or
                                sequential order. You cannot go directly to a
                                data item but have to go through all the other
                                data items to get to it. This means data access
                                can be slow, especially if there are lots of
                                records. There are many occasions when you need
                                fast access to some data. You first of all need
                                to select a storage medium that allows you to
                                access directly areas of data such as a floppy
                                disk, hard disk or CD R/W (but not magnetic
                                tape) and then you need a file structure that
                                allows you to go straight to some data.
                              </p>

                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An enquiry system
                                </strong>
                                <br />
                                Index sequential is a method that speeds up
                                access to data. It does this by taking a
                                sequential file and splitting it up into areas.
                                Each block of data is stored in its own area. An
                                index is then provided that points to each area.
                                For example, suppose you had to design a
                                database that allowed you to retrieve details
                                about authors. You would get your file of
                                authors and put them in a sequential order. At
                                the beginning of the file, you would create an
                                index, like this:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      For authors beginning with A go to address
                                      23000.
                                    </li>
                                    <li class="NormalContent">
                                      For authors beginning with B go to address
                                      24000.
                                    </li>
                                    <li class="NormalContent">
                                      For authors beginning with C go to address
                                      25000 and so on.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                When someone wants to get back details of an
                                author, they:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Type in the author's surname.
                                    </li>
                                    <li class="NormalContent">
                                      The first letter of the author is stripped
                                      out.
                                    </li>
                                    <li class="NormalContent">
                                      The letter is looked up in the index.
                                    </li>
                                    <li class="NormalContent">
                                      The computer jumps to the address that
                                      corresponds to the letter.
                                    </li>
                                    <li class="NormalContent">
                                      A sequential search begins from that
                                      address, until the author is found or the
                                      end of the file is reached.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                Note that the file <strong>must</strong> be in
                                sequential order.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An employee database
                                </strong>
                                <br />
                                You could split all of the employees for a
                                company into blocks, and provide an index in
                                much the same way as the above example. When an
                                employee makes an enquiry that requires their
                                record to be brought up on the screen, this can
                                be done quickly because the file is arranged in
                                an index sequential structure. There may be
                                times, however, when the company needs to use
                                all of the records in the file to batch process,
                                for example, pay slips. The index sequential
                                file is ideally organised for this as well,
                                since all the employees are in alphabetical
                                order. Index sequential files, then, are
                                especially ideal if you:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Sometimes need to access individual
                                      records quickly <strong>AND</strong>
                                    </li>
                                    <li class="NormalContent">
                                      Sometimes need to perform operations on
                                      the whole file.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  A detailed example of an index sequential file
                                  structure
                                </strong>
                                <br />
                                Consider a bank with 100 million customers. They
                                all have their own account number, which is an
                                8-digit number. Sometimes,
                                <strong>the whole file</strong> holding the
                                customers' details is accessed in batch
                                processing mode, for example to print statements
                                every month and sometimes
                                <strong>individual records</strong> are
                                retrieved, for example, when a customer has a
                                query about their account. Because of this, the
                                index sequential method of organising these
                                records has been selected. The records are
                                organised by putting the account numbers in
                                sequential order. An index is then
                                designed.&nbsp; Imagine we didn't have an index,
                                just one big sequential file. To find a
                                particular account, you would go to the
                                beginning of the file, and search one record
                                after another until you either find the record
                                or come to the end of the file. This is a simple
                                system but with so many records it would take a
                                long time. You could end up checking 100 million
                                records before you found the one you wanted!
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An index sequential file with one index level
                                </strong>
                                <br />
                                Let's implement an index sequential file. To
                                start with, let's just have one index. The
                                account whose record we want to retrieve is
                                account number 45843521. This is entered into
                                the 'search' field. How is the record retrieved?
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/98c2c9bd-4161-4bf1-a6ca-3d7aed95da52clip_image003.gif"
                                  alt="one index"
                                />
                                &nbsp;
                                <strong>
                                  <br />
                                  An index sequential file with one index.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                In the system illustrated above, we have created
                                an index. It is an index of the first two
                                numbers in an account number. It starts with 00
                                then 01, 02, 03 up to 97, 98 and finally 99. If
                                an account begins with e.g. 45, you go down the
                                index to 45 and get the data held in that
                                location. That data is the first memory address
                                of a block of memory addresses where all the
                                accounts begin with 45 - and the block in this
                                example is 1000000 memory addresses long. You go
                                to that memory address, and then start
                                sequentially searching the block for the account
                                number. You can do that because all of the
                                accounts in that block from that memory location
                                begin with 45. You don't have to search all the
                                other account numbers that begin with 01 or 02
                                or 03 and so on. How has this helped? When we
                                had just a sequential file, you may have had to
                                check up to 100000000 records before you got to
                                the one you wanted. With one index, you need to
                                sequentially search the index (up to 100
                                comparisons) followed by a sequential search of
                                1000000 records. In the worse case, your program
                                would have to make 1000100 comparisons before it
                                found the requested record - a massive
                                improvement on 100000000 records!
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An index sequential file with two index levels
                                </strong>
                                <br />
                                We can improve things further, however. After we
                                have got to the place in memory where all
                                accounts begin with 45, we could examine the
                                next two numbers in an account and use this in
                                another index. The first index pointed us to
                                records that began with 45. The second index
                                points us to records that begin with 4584. If we
                                get to the block of addresses where every
                                account begins with 4584, we can quickly find
                                our target account using sequential searching.
                                You can see this in the next diagram. The first
                                index takes up to 100 comparisons. The second
                                index will take up to a further 100 comparisons,
                                a total of 200. The final sequential search will
                                take only up to 10000 comparisons because the
                                blocks being pointed to are now blocks of 10000
                                memory addresses! We have gone from having to
                                search 100000000 records, to 1000100 records to
                                10200 records!
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/637901ab-d0a5-4c36-bedf-bc0bd237fa5cclip_image004.gif"
                                  alt="two indexes"
                                />
                                <br />
                                <strong>
                                  An index sequential file with two indexes.
                                </strong>
                              </p>
                              <p>
                                <span class="NormalContentHeading">
                                  <strong>
                                    An index sequential file with three index
                                    levels
                                  </strong>
                                </span>
                                <span class="NormalContent">
                                  <br />
                                  There is nothing stopping us adding a further
                                  index! Once we have got to the place where all
                                  accounts begin with 4584, we can check the
                                  next two digits by searching from that point
                                  sequentially. This will point us to an area in
                                  memory where all accounts begin with 458435.
                                  We then search that block of memory
                                  sequentially. This is shown below.
                                </span>
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/ec9cc9f7-244b-46be-8349-fbe77813f75bclip_image005.gif"
                                  alt="3 indexes"
                                />
                                &nbsp;
                                <strong>
                                  <br />
                                  An index sequential file with three indexes.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                We can see how many comparisons are needed now
                                before we find a record. We need up to 100
                                comparisons for the first index, 100 for the
                                second index and 100 for the third index, a
                                total of 300 comparisons. The blocks we will
                                sequentially search to find an account only need
                                to be 100 memory addresses long now. So now, we
                                need only do up to 400 comparisons to find a
                                record (or an average of 200 comparisons) - a
                                far cry from 100 million!!
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Another example of index sequential
                                  organisation
                                </strong>
                                <br />
                                When a pupil joins the Noname University, they
                                are allocated a unique ID code. The first two
                                numbers of the code are based on the tutor that
                                they have been allocated to. There are twelve
                                tutors. The first has an ID of 01, the second 02
                                and so on up to 12. The third number in the
                                student’s unique code is a 0 if the student is
                                female and 1 if they are male. The next 2 digits
                                are a code for the course they are on, from 01
                                to 15. The final two digits are a unique ID
                                number, ranging from 01 to 99. An example of a
                                code for somebody who was allocated tutor 6, is
                                male, is doing course ID 15 and has the ID 40 is
                                0611540. We want to design an index sequential
                                file structure so that we can retrieve records
                                quickly. We will represent the structure using
                                diagrams. How would we go about this? The first
                                thing we need to do is have an index with 12
                                locations, for the twelve tutors. We need a
                                first level index. The diagram would look like
                                this:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/3ed22e1f-8028-4288-adf1-fd6f01545727a.jpg"
                                  alt="1 index"
                                />
                              </p>
                              <p class="NormalContent">
                                Whenever we want to retrieve a record, we can
                                now strip out the first two numbers in a
                                student’s code and use it in a sequential search
                                of our index. This will then point us to a block
                                of memory where all students have that
                                particular tutor. We can then search that block
                                sequentially for any particular student. The
                                worst-case scenario is searching for student
                                1211599. The first index will take 12
                                comparisons. Then searching the associated block
                                will take 2970 comparisons, a total of 2982
                                comparisons. However, these blocks will still be
                                large and will take time to search. (We might of
                                course get lucky and need only 2 comparisons, if
                                we were searching for student 0100101).
                              </p>
                              <p class="NormalContent">
                                We can improve things by having a second index.
                                After we have stripped out the first two numbers
                                and searched for the right tutor, we can then
                                strip out the third digit in the code and search
                                sequentially for the right gender. This will
                                then point us to blocks of memory where, in each
                                block, students have a particular tutor and are
                                a particular gender.
                                <br />
                                <br />
                                <img
                                  src="images/adc87749-5fc9-41bd-9059-39fd97daa612b.jpg"
                                  alt="2 indexes"
                                />
                              </p>
                              <p class="NormalContent">
                                We can add another level for the course code to
                                improve things even further, like this:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/0143f372-738b-4c08-8311-0ce98cf8b0f6c.jpg"
                                  alt="3 indexes"
                                />
                              </p>
                              <div>
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
    </div>
  );
}

export default Index_sequential_files_and_multi_level_indexes;