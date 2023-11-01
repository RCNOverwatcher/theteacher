import React from "react";

function Bubble_sorting___Answers() {
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
                                Bubble sorting- Answers
                              </h1>
                              <p>
                                You can copy and paste these programs directly
                                into Python and run them. You may, after your
                                students have battled through sort algorithms,
                                want to point out the sort method available for
                                lists for 5 minutes. It's a very quick and easy
                                way to sort a list but nowhere near as much fun
                                as algorithms such as these!
                              </p>

                              <p>
                                <strong>Q1 - 2</strong>
                              </p>
                              <p>
                                <strong>def bubble(myList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for passnumber in
                                  range(len(myList)-1,0,-1):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; for i in
                                  range(passnumber):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if
                                  myList[i]&gt;myList[i+1]:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; temp = myList[i]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; myList[i] = myList[i+1]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; myList[i+1] = temp
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  anyList = [54,26,93,17,77,31,44,55,20]
                                </strong>
                                <br />
                                <strong>bubble(anyList)</strong>
                              </p>
                              <p>
                                <strong>print(anyList)</strong>
                              </p>
                              <p>
                                <strong>Q3.</strong>
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
                                  anyList = [] # create an empty list
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
                                  anyList.append(random.randint(1,100)) # get a
                                  random number and append it to the list
                                </strong>
                              </p>
                              <p>
                                <strong>def bubble(myList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for passnumber in
                                  range(len(myList)-1,0,-1):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; for i in
                                  range(passnumber):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if
                                  myList[i]&gt;myList[i+1]:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; temp = myList[i]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; myList[i] = myList[i+1]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; myList[i+1] = temp
                                </strong>
                              </p>
                              <p>
                                <strong>print(anyList)</strong>
                                <br />
                                <strong>bubble(anyList)</strong>
                                <br />
                                <strong>print(anyList)</strong>
                              </p>
                              <p>
                                <strong>Q4.</strong>
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
                                  anyList = [] # create an empty list
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
                                  anyList.append(random.randint(1,20)) # get a
                                  random number and append it to the list
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  #This function prints out the list.
                                </strong>
                                <br />
                                <strong>def printList(anyList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for i in range(len(anyList)): #
                                  for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp;
                                  print(anyList[i],end=' ')
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print('\n')</strong>
                              </p>
                              <p>
                                <strong>
                                  print('This is the unsorted list:')
                                </strong>
                                <br />
                                <strong>printList(anyList)</strong>
                                <br />
                                <strong>print('\n')</strong>
                              </p>
                              <p>
                                <br />
                                <strong>def bubble(myList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for passnumber in
                                  range(len(myList)-1,0,-1):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; for i in
                                  range(passnumber):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if
                                  myList[i]&gt;myList[i+1]:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; temp = myList[i]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp;&nbsp;myList[i] = myList[i+1]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp;&nbsp;myList[i+1] = temp
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp;&nbsp;printList(anyList)
                                </strong>
                              </p>
                              <p>
                                <strong>bubble(anyList)</strong>
                              </p>
                              <p>
                                <span style="text-decoration: underline">
                                  <strong>Extension a</strong>
                                </span>
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
                                  anyList = [] # create an empty list
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
                                  anyList.append(random.randint(1,20)) # get a
                                  random number and append it to the list
                                </strong>
                              </p>
                              <p>
                                <strong>anyList1 = anyList[:]</strong>
                                <br />
                                <strong>anyList2 = anyList[:]</strong>
                              </p>
                              <p>
                                <strong>
                                  #This function prints out the list.
                                </strong>
                                <br />
                                <strong>def printList(anyList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for i in range(len(anyList)): #
                                  for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp;
                                  print(anyList[i],end=' ')
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print('\n')</strong>
                              </p>
                              <p>
                                <strong>def bubble(myList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for passnumber in
                                  range(len(myList)-1,0,-1):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; for i in
                                  range(passnumber):
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>if
                                  myList[i]&gt;myList[i+1]:
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>temp =
                                  myList[i]
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>myList[i]
                                  = myList[i+1]
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  myList[i+1] = temp
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  printList(anyList1)
                                </strong>
                              </p>
                              <p>
                                <strong>def insertion(myArray):</strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>for j in
                                  range(1,len(myArray)):
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>key =
                                  myArray[j]
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>i = j - 1
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>while i
                                  &gt;= 0 and myArray[i] &gt; key:
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>myArray[i
                                  + 1] = myArray[i]
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>i = i-1
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  myArray[i+1] = key
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  printList(myArray)
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  print('This is the unsorted list:')
                                </strong>
                                <br />
                                <strong>printList(anyList1)</strong>
                                <br />
                                <strong>
                                  print('This is bubble sort ...\n')
                                </strong>
                                <br />
                                <strong>bubble(anyList1)</strong>
                              </p>
                              <p>
                                <strong>
                                  print('This is the unsorted list:')
                                </strong>
                                <br />
                                <strong>printList(anyList2)</strong>
                                <br />
                                <strong>
                                  print('This is insertion sort ...\n')
                                </strong>
                                <br />
                                <strong>insertion(anyList2)</strong>
                              </p>
                              <p>
                                <span style="text-decoration: underline">
                                  <strong>Extension b</strong>
                                </span>
                              </p>
                              <p style="margin-top: 10px">
                                <strong>
                                  anyList = ["adder", "zebra", "lion", "rat",
                                  "koala bear", "monkey", "shark", "ant"]
                                </strong>
                              </p>
                              <p>
                                <strong>anyList1 = anyList[:]</strong>
                                <br />
                                <strong>anyList2 = anyList[:]</strong>
                              </p>
                              <p>
                                <strong>
                                  #This function prints out the list.
                                </strong>
                                <br />
                                <strong>def printList(anyList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for i in range(len(anyList)): #
                                  for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp;
                                  print(anyList[i],end=' ')
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print('\n')</strong>
                              </p>
                              <p>
                                <strong>def bubble(myList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for passnumber in
                                  range(len(myList)-1,0,-1):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; for i in
                                  range(passnumber):
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>if
                                  myList[i]&gt;myList[i+1]:
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>temp =
                                  myList[i]
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>myList[i]
                                  = myList[i+1]
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  myList[i+1] = temp
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  printList(anyList1)
                                </strong>
                              </p>
                              <p>
                                <strong>def insertion(myArray):</strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>for j in
                                  range(1,len(myArray)):
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>key =
                                  myArray[j]
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>i = j - 1
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>while i
                                  &gt;= 0 and myArray[i] &gt; key:
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>myArray[i
                                  + 1] = myArray[i]
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>i = i-1
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  myArray[i+1] = key
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  printList(myArray)
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  print('This is the unsorted list:')
                                </strong>
                                <br />
                                <strong>printList(anyList1)</strong>
                                <br />
                                <strong>
                                  print('This is bubble sort ...\n')
                                </strong>
                                <br />
                                <strong>bubble(anyList1)</strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>
                                  print('This is the unsorted list:')
                                </strong>
                                <br />
                                <strong>printList(anyList2)</strong>
                                <br />
                                <strong>
                                  print('This is insertion sort ...\n')
                                </strong>
                                <br />
                                <strong>insertion(anyList2)</strong>
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

export default Bubble_sorting___Answers;