#include<iostream>
using namespace std;

double balance = 1000;
int deposit=0;
int withDraw=0;
int passWord=1234;
int choice=0;

//Show is function to display the Menu of ATM
void show(){

    cout << "***** Menu *****" << endl;
    cout << "1:balance" << endl;
    cout << "2:withdraw" << endl;
    cout << "3:deposit" << endl;
    cout << "4:Exit" << endl;
    cout << "**********" << endl;
}


void  Process(){

    cout << "Enter Your passWord: " << endl;
    cin >> passWord;
do{
    if(passWord==0000){

        cout << "Enter Your Choice: " << endl;
        cin >>choice;

        switch(choice){
            case 1:
                cout << "Your Balance is: " << balance << endl;
            break;
            case 2:
               cout << "NOTE: Your balace is: "<< balance << endl; 
               cout << "Enter Your Amount"<< endl;
               cin>> withDraw;

               if(withDraw>balance){
                cout << "Sorry You can't withdraw this Amount "<< endl;
               }else{
                    balance-=withDraw;
                    cout << "Your Balance Now is: "<< balance << endl;
               }
            break;
            case 3:
                cout << "Your Current Balance is: "<< balance << endl << endl;
                    cout << "Enter Your deposit Money : ";
                    cin >> deposit;
                    balance+=deposit;
                    cout << "Your Balance Now is: "<< balance << endl;
            break;
            case 4:
                cout <<"Thank You For Using The ATM Machine" << endl;
        }//end of stwitch

}//end of if
    else{
        char option ='o';
        cout << "Password is Incorrect, Do You Want To Try Again ? Enter [Y] for Yes or [N] for No: ";
        cin>>option;
        if(option == 'Y' || option=='y'){
            cout << "Enter Your Password: " << endl;
            cin>> passWord;
        }
        else{
            choice=4;
        }
    }
}while(choice<4);
}//end of process

int main()
{
    show();
    Process();

    return 0;
}

