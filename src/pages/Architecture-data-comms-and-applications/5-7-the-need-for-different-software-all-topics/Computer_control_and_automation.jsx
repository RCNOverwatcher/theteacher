import React from "react";

function Computer_control_and_automation() {
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
                                Computer control and automation
                              </h1>
                              <p>
                                <strong>
                                  Introduction
                                  <br />
                                </strong>
                                Computer control is the use of computer system
                                to control a process. Typically, you start by
                                telling the control system what you are aiming
                                for, what you want the outputs to be. Then,
                                input devices sensing the physical world take
                                readings, or other systems collect data to use.
                                This data is passed to the program to be
                                processed using a program written for the
                                purpose. The program will typically look at what
                                you are trying to achieve, look at what the
                                sensors or data is saying and where you are from
                                where you want to be and then make decisions
                                about what needs to happen. Outputs then occur.
                                This could include everything from switching a
                                light on, speeding up a motor, or displaying or
                                updating some information on a screen. Once the
                                system has been updated, the inputs are read
                                again and the whole process is repeated.&nbsp;
                              </p>

                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/67b49e49-8498-4736-a435-8047383a5afaauto.GIF"
                                  alt="auto"
                                />
                              </p>
                              <p>
                                <strong>Inputs</strong>
                                <br />
                                Sensors are devices that respond to a specific
                                physical property in a system. They are
                                <strong>
                                  <em>transducers</em>
                                </strong>{" "}
                                in that they take one form of&nbsp;and convert
                                it into another. Here are some examples.
                              </p>
                              <p style="margin-left: 30px">
                                1) A thermistor is a temperature sensor (or
                                temperature transducer). It converts a
                                temperature into an analogue&nbsp;voltage. The
                                voltage generated depends upon the temperature.
                                There are an infinite number of temperatures
                                and&nbsp;so there are an infinite number of
                                voltages. Devices that generate an infinite
                                range of values are known as&nbsp;'analogue'
                                devices. You could use a thermistor in a
                                chemical plant to read the temperature of a
                                reaction. The&nbsp;processor could convert the
                                data from the transducer into a graph. Operators
                                could then see the history of
                                the&nbsp;temperature of a reaction.
                                <br />
                                2) A photocell is a light sensor (light
                                transducer). It converts light energy into an
                                analogue voltage. Light meters
                                use&nbsp;photocells. A photographer can set up a
                                camera according to the light available, as
                                indicated on a light meter.
                                <br />
                                3) A pressure sensor (pressure transducer) in a
                                chemical reaction vessel converts pressure into
                                an analogue signal.
                                <br />
                                4) A pressure mat in a burglar alarm is a
                                sensor. It senses whether someone is either on
                                the mat or off it. It has two&nbsp;possible
                                states: on and off so it is known as a digital
                                device.
                                <br />
                                5) A switch or push-button is a digital sensor.
                                It detects one of two positions: on and off.
                                Switches can be used to&nbsp;send signals to a
                                system. For example, an operator in a factory
                                might start a system by pressing the 'start'
                                button.&nbsp;This signal is fed into the
                                computer, which processes the signal in its
                                program.
                                <br />
                                6) A proximity sensor is a digital sensor. When
                                something gets too close to it, it generates a
                                voltage. When there is&nbsp;nothing next to it,
                                it generates no voltage. Proximity sensors, for
                                example, can be used to signal to a lift
                                control&nbsp;system that a particular floor is
                                coming up. The program can then order the motor
                                to slow down.
                              </p>
                              <p>
                                <strong>Program</strong>
                                <br />
                                The program will look at what you are trying to
                                achieve, read the inputs, compare them, and then
                                make decisions about what needs to happen to get
                                you closer to where you want to be. Programs can
                                be written in lots of different languages,
                                although some are designed for specific
                                purposes. For example, ADA is often used for
                                safety-critical systems. Assmebly programming is
                                often used for high-speed processing in
                                factories.
                              </p>
                              <p>
                                <strong>Outputs</strong>
                                <br />
                                Outputs can be information on a screen but
                                often, it involves turning things on or off or
                                speeding things up or down, for example.
                                Anything which is computer controlled which
                                causes a movement to happen is said to be an{" "}
                                <em>
                                  <strong>actuator</strong>
                                </em>
                                . Examples of actuators include motors, computer
                                controlled valves and computer controlled
                                pneumatic or hydraulic pistons. A light could be
                                controlled by a computer system as well as a
                                bell, for example, but they are not actuators
                                because they don't cause movement.&nbsp;
                              </p>
                              <p>
                                <strong>Interfaces</strong>
                                <br />
                                sensors rarely just connect to a computer.
                                Neither do output devices. More often than not,
                                they use different physical plugs and sockets
                                and produce or need signals which can't directly
                                be understood by a computer. Therefore, sensors
                                and output devices are usually connected to an{" "}
                                <strong>
                                  <em>interface</em>
                                </strong>
                                .&nbsp;We can think of an interface as a black
                                box, designed to have sensors and outputs
                                physically connected to it, and designed to
                                convert sensor signals into computer signals,
                                and computer signals into signals that can
                                control output devices.&nbsp;Looking at our
                                previous diagram of a control system, we could
                                modify it slightly to this:
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/7ffef8a0-bcb7-4de2-bc86-a7cc2914867fauto2.GIF"
                                  alt="auto2"
                                />
                              </p>
                              <p>
                                <strong>An automated control system</strong>
                                <br />A greenhouse could have a temperature
                                control system or we could design a system to
                                automatically control the temperature while a
                                chemical reaction is taking place.
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/f6eaecf4-2ef2-4fb1-9e13-f5a68bd87f1fauto3.GIF"
                                  alt="auto3"
                                />
                              </p>
                              <p>
                                1) When the system is started, the desired
                                temperature is&nbsp;inputted into the system,
                                perhaps using a keypad.
                                <br />
                                2. A signal is sent to the heater and the tank
                                heats up.
                                <br />
                                3. The thermistor (a temperature measuring
                                sensor)&nbsp;constantly sends a signal back to
                                the computer. This is&nbsp;known as a ‘feedback
                                signal’ because it is used to compare&nbsp;the
                                current temperature with a target one.
                                <br />
                                4. The process control program in the computer
                                checks the&nbsp;current temperature against the
                                desired temperature.
                                <br />
                                5. If the desired temperature hasn't been
                                reached yet, the&nbsp;heater is kept on. This
                                process is continued until the
                                desired&nbsp;temperature is reached or exceeded.
                                <br />
                                6. When it is reached or exceeded, the heater is
                                switched off.&nbsp;If the tank ever becomes too
                                hot, then a pump (an actuator)&nbsp;is switched
                                on. This pumps cool water around the tank.&nbsp;
                                <br />
                                7. It is switched off when the temperature
                                returns to an&nbsp;acceptable level.
                              </p>
                              <p>
                                <strong>
                                  Advantages of computer control systems and
                                  automation
                                </strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      Computer control systems can work 24 / 7 /
                                      365 without a break and don't need paying.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        Control systems don't need holidays,
                                        breaks or get ill.
                                      </span>
                                    </li>
                                    <li>
                                      Control systems can work to a much finer
                                      tolerance and accuracy than people.
                                    </li>
                                    <li>
                                      Control systems work reliably all the
                                      time, without variation.
                                    </li>
                                    <li>
                                      These systems can process information from
                                      thousands of different sensors and control
                                      lots of different outputs far faster than
                                      a person ever could.
                                    </li>
                                    <li>
                                      They can be deployed in hazardous areas
                                      that humans couldn't go, or couldn't go
                                      for long periods of time e.g. at the
                                      bottom of the ocean, in deep space, in
                                      highly radioactive areas or on the top of
                                      mountains.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong style="line-height: 16.3636360168457px">
                                  Disadvantages of computer control systems and
                                  automation
                                </strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      Control systems are expensive to buy
                                      initially, although over time, money is
                                      saved.
                                    </li>
                                    <li>
                                      Control systems need trained people to
                                      maintain them. This can be expensive.
                                    </li>
                                    <li>
                                      Control systems do break down and do need
                                      maintenance.
                                    </li>
                                    <li>
                                      If there is a bug in the program,
                                      something bad might happen!
                                    </li>
                                    <li>
                                      Computer control systems will only follow
                                      the program. They don't get hunches that
                                      something isn't right and can't react to
                                      unforeseen circumstances, like people do.
                                    </li>
                                    <li>
                                      There are some situations where people
                                      want people to be in charge e.g. driving a
                                      car or landing a plane.
                                      <span style="line-height: 1.5">
                                        &nbsp;
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
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

export default Computer_control_and_automation;
