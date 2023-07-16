/*
 *   Copyright 2014 Marco Martin <mart@kde.org>
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License version 2,
 *   or (at your option) any later version, as published by the Free
 *   Software Foundation
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details
 *
 *   You should have received a copy of the GNU General Public
 *   License along with this program; if not, write to the
 *   Free Software Foundation, Inc.,
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import QtQuick 2.5
import QtQuick.Window 2.2

// http://doc.qt.io/qt-5/qtquick-index.html
// http://doc.qt.io/qt-5/qtquick-animation-example.html
// ksplashqml solydk-light --test

Rectangle {
    id: root
    color: "#8eb6c9"
    
    Rectangle {
        id: logobg
        color: "#ffffff"
        width: root.width / 5
        height: root.height
        anchors.right: root.right
        
        Image {
            id: logo
            opacity: 0.3
            anchors.top: logobg.top
            anchors.horizontalCenter: logobg.horizontalCenter
            anchors.topMargin: 40
            source: "images/solydk.svgz"
            sourceSize.width: logobg.width / 1.8
            SequentialAnimation on opacity {
                loops: Animation.Infinite
                OpacityAnimator{
                    from: 0.3;
                    to: 1;
                    duration: 1200
                }
                OpacityAnimator{
                    from: 1;
                    to: 0.3;
                    duration: 1200
                }
            }
        }
    }
    
    Image {
        id: rootlogo
        anchors.right: logobg.left
        anchors.bottom: root.bottom
        source: "images/solydk-bglogo.svgz"
        sourceSize.height: root.height / 1.5
        sourceSize.width: rootlogo.height
    }
}
