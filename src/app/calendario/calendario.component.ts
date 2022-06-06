import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent, MbscEventcalendarView} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-calendario',
    templateUrl: './calendario.component.html',
    providers: [Notifications]
})
export class CalendarioComponent implements OnInit {
    selectedDate: Date;
    // Place the code below into your own component or use the full template


    constructor(private http: HttpClient, private notify: Notifications) {}

    myEvents: MbscCalendarEvent[] = [{
        start: '2022-06-05T07:00',
        end: '2022-06-05T09:00',
        title: 'Stakeholder mtg.',
        color: '#d64646'
    }, {
        start: '2022-06-08T18:00',
        end: '2022-06-08T19:30',
        title: 'Wrapup mtg.',
        color: '#ecbc72'
    }, {
        start: '2022-06-05T14:00',
        end: '2022-06-05T18:00',
        title: 'Business of Software Conference',
        color: '#ff6d42'
    }, {
        start: '2022-06-06T20:00',
        end: '2022-06-06T21:50',
        title: 'Product Team mtg.',
        color: '#913aa7'
    }, {
        start: '2022-06-04T13:00',
        end: '2022-06-04T15:00',
        title: 'Decision Making mtg.',
        color: '#46c3d6'
    }, {
        start: '2022-06-06T13:00',
        end: '2022-06-06T14:00',
        title: 'Quick mtg. with Martin',
        color: '#50b166'
    }, {
        start: '2022-06-08T12:00',
        end: '2022-06-08T16:00',
        color: '#5bb7c5',
        title: 'Team-Building'
    }];;

    eventSettings: MbscEventcalendarOptions = {
        locale: onscroll,
        theme: 'material',
        themeVariant: 'dark',
        clickToCreate: false,
        dragToCreate: false,
        dragToMove: false,
        dragToResize: false,
        view: {
            agenda: { type: 'month' }
        },
        onEventClick: (event, inst) => {
            this.notify.toast({
                message: event.event.title
            });
        },
        responsive: {
            xsmall: {
                view: {
                    calendar: {
                        type: 'week',
                    },
                    agenda: {
                        type: 'day'
                    }
                }
            },
            custom: { // Custom breakpoint
                breakpoint: 600,
                view: {
                    calendar: {
                        labels: true
                    }
                }
            }
        }
    };
    ngOnInit(): void {
        this.http.jsonp < MbscCalendarEvent[] > ('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
            this.myEvents = resp;
        });
    }
}
