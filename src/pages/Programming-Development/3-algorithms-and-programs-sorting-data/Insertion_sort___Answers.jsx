import React from "react";

function Insertion_sort___Answers() {
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
                                Insertion sort - Answers
                              </h1>
                              <p>
                                Here are some different versions of the
                                insertion sort program, which you can copy and
                                paste straight into Python.
                              </p>

                              <p>
                                <strong>VERSION 1</strong>
                              </p>
                              <p>
                                <strong>import random</strong>
                              </p>
                              <p>
                                <strong>
                                  myArray = [] # create an empty list
                                </strong>
                                <br />
                                <strong>
                                  size = int(input('How many data items?
                                  &gt;&gt;&gt; ')) # ask for the size required
                                </strong>
                                <br />
                                <strong>
                                  for i in range(size): # for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;
                                  myArray.append(random.randint(1,500)) # get a
                                  random number and append it
                                </strong>
                              </p>
                              <p>
                                <strong>print('Unsorted list:') </strong>
                                <br />
                                <strong>
                                  for i in range(len(myArray)): # for i= 0 to
                                  (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; print(myArray[i],end=' ')
                                </strong>
                                <br />
                                <br />
                                <strong>for j in range(1,len(myArray)):</strong>
                                <br />
                                <strong>&nbsp; &nbsp; key = myArray[j]</strong>
                                <br />
                                <strong>&nbsp; &nbsp; i = j - 1</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; while i &gt;= 0 and myArray[i]
                                  &gt; key:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; myArray[i + 1] =
                                  myArray[i]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; i = i-1
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; myArray[i+1] = key
                                </strong>
                              </p>
                              <p>
                                <strong>print('\nSorted list:') </strong>
                                <br />
                                <strong>
                                  for i in range(len(myArray)): # for i= 0 to
                                  (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; print(myArray[i],end=' ')
                                </strong>
                              </p>
                              <p>&nbsp;</p>
                              <p style="margin-top: 10px">
                                <strong>VERSION 2</strong>
                              </p>
                              <p>
                                <strong>##import random</strong>
                                <br />
                                <strong>##</strong>
                                <br />
                                <strong>
                                  ##myArray = [] # create an empty list
                                </strong>
                                <br />
                                <strong>
                                  ##size = int(input('How many data items?
                                  &gt;&gt;&gt; ')) # ask for the size required
                                </strong>
                                <br />
                                <strong>
                                  ##for i in range(size): # for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  ## myArray.append(random.randint(1,500)) # get
                                  a random number and append it
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  myArray=["adder", "zebra", "lion", "rat",
                                  "koala bear", "monkey", "shark", "ant"]
                                </strong>
                              </p>
                              <p>
                                <strong>print('Unsorted list:')&nbsp;</strong>
                                <br />
                                <strong>
                                  for i in range(len(myArray)): # for i= 0 to
                                  (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; print(myArray[i],end=' ')
                                </strong>
                              </p>
                              <p>
                                <strong>for j in range(1,len(myArray)):</strong>
                                <br />
                                <strong>&nbsp; &nbsp; key = myArray[j]</strong>
                                <br />
                                <strong>&nbsp; &nbsp; i = j - 1</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; while i &gt;= 0 and myArray[i]
                                  &gt; key:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; myArray[i + 1] =
                                  myArray[i]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; i = i-1
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; myArray[i+1] = key
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>print('\nSorted list:')&nbsp;</strong>
                                <br />
                                <strong>
                                  for i in range(len(myArray)): # for i= 0 to
                                  (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; print(myArray[i],end=' ')
                                </strong>
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                <strong>VERSION 3</strong>
                              </p>
                              <p>
                                <strong>import random</strong>
                              </p>
                              <p>
                                <strong>
                                  #This code creates a list of random numbers
                                </strong>
                                <br />
                                <strong>
                                  myArray = [] # create an empty list
                                </strong>
                                <br />
                                <strong>
                                  size = int(input('How many data items?
                                  &gt;&gt;&gt; ')) # ask for the size required
                                </strong>
                                <br />
                                <strong>
                                  for i in range(size): # for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;
                                  myArray.append(random.randint(1,500)) # get a
                                  random number and append it to the list
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  #This function prints out the list.
                                </strong>
                                <br />
                                <strong>def printArray(anyArray):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for i in range(len(anyArray)): #
                                  for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp;
                                  print(anyArray[i],end=' ')
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print('\n')10 </strong>
                                <br />
                                <br />
                                <strong>for j in range(1,len(myArray)):</strong>
                                <br />
                                <strong>&nbsp; &nbsp; key = myArray[j]</strong>
                                <br />
                                <strong>&nbsp; &nbsp; i = j - 1</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; while i &gt;= 0 and myArray[i]
                                  &gt; key:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; myArray[i + 1] =
                                  myArray[i]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; i = i-1
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; myArray[i+1] = key
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; printArray(myArray)
                                </strong>
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

export default Insertion_sort___Answers;