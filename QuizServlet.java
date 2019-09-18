package edu.mum.cs.cs472.labs.servlet;

import edu.mum.cs.cs472.labs.model.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "quiz",urlPatterns = {"/","/quiz"})
public class QuizServlet extends HttpServlet {
    private Quiz quiz;
    public  static String sessionName = "quiz";
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/html");

        HttpSession session = req.getSession();
        if(session.getAttribute(sessionName) !=null){
            quiz = (Quiz)session.getAttribute(sessionName);
        }
        else {
            quiz = new Quiz();
            session.setAttribute(sessionName, quiz);
        }
        //out.println((Quiz)session.getAttribute(sessionName));
        if(quiz.currentQuestion() <= quiz.maxQuestionNos()) {
            out.println("<html>\n" +
                    "<head>\n" +
                    "    <link href=\"css/quiz.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div>\n" +
                    "    <h2>The Number Quiz</h2>\n" +
                    "\n" +
                    "    <p>Your Current Sqore is " + quiz.getScore() + "</p>\n" +
                    "\n" +
                    "    <p>Guess the next number in the sequence</p>\n" +
                    "\n" +
                    "    <p>" + quiz.getQuestion(quiz.currentQuestion()) + "</p>\n" +
                    "\n" +
                    "    <form action=\"quiz\" method=\"post\">\n" +
                    "        <label for=\"ans\">Your Answer </label><input type=\"number\" name=\"ans\" id=\"ans\">\n" +
                    "        <br><input type=\"hidden\" value=\"" + quiz.currentQuestion() + "\" name=\"questionNo\"></br>\n" +
                    "        <input type=\"submit\" value=\"Submit\">\n" +
                    "    </form>\n" +
                    "\n" +
                    "</div>\n" +
                    "\n" +
                    "</body>\n" +
                    "</html>");
        }else{
            out.println("<h2>The Number Quiz</h2>");
            out.println("<p>Your Current Sqore is \"" + quiz.getScore() + "\"</p>");
            out.println("<p>Tou have completed the number quiz with a score of  \"" + quiz.getScore() + "\" out of "+ (quiz.currentQuestion()-1) +" </p>");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        quiz = (Quiz)session.getAttribute(sessionName);
        int qustionNo = Integer.valueOf(req.getParameter("questionNo"));
        int ans = Integer.valueOf(req.getParameter("ans"));
        if(quiz!=null) {
            quiz.setAnswer(qustionNo, ans);
        }
        session.setAttribute(sessionName, quiz);
        resp.sendRedirect("quiz");
    }
}
